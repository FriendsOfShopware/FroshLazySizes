<?php

declare(strict_types=1);

namespace Frosh\LazySizes\Storefront\Framework\Twig\Extension;

use Shopware\Core\Content\Media\MediaEntity;
use Symfony\Component\DependencyInjection\Attribute\AutoconfigureTag;
use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;

#[AutoconfigureTag('twig.extension')]
class UrlEncodingTwigFilter extends AbstractExtension
{
    /**
     * @return TwigFilter[]
     */
    public function getFilters(): array
    {
        return [
            new TwigFilter('frosh_encode_url', [$this, 'encodeUrl']),
        ];
    }

    public function encodeUrl(?string $mediaUrl): ?string
    {
        if ($mediaUrl === null) {
            return null;
        }

        $urlInfo = parse_url($mediaUrl);

        if (!isset($urlInfo['path'])) {
            return $mediaUrl;
        }

        $mediaParts = ['media', 'thumbnail'];

        foreach ($mediaParts as $mediaPart) {
            // we encode just parts after "/media/" and "/thumbnail/" to add support for imgproxy and paths which always need to be encoded
            $paths = \explode(\sprintf('/%s/', $mediaPart), $urlInfo['path']);

            if (count($paths) < 2) {
                continue;
            }

            $paths[0] .= '/' . $mediaPart;

            $relativeImagePath = $paths[1];

            $relativeImagePathSegments = explode('/', $relativeImagePath);
            foreach ($relativeImagePathSegments as $index => $segment) {
                $relativeImagePathSegments[$index] = \rawurlencode($segment);
            }

            $paths[1] = implode('/', $relativeImagePathSegments);

            $path = implode('/', $paths);
            if (isset($urlInfo['query'])) {
                $path .= "?{$urlInfo['query']}";
            }

            $encodedPath = '';

            if (isset($urlInfo['scheme'])) {
                $encodedPath = "{$urlInfo['scheme']}://";
            }

            if (isset($urlInfo['host'])) {
                $encodedPath .= "{$urlInfo['host']}";
            }

            if (isset($urlInfo['port'])) {
                $encodedPath .= ":{$urlInfo['port']}";
            }

            return $encodedPath . $path;
        }

        return $mediaUrl;
    }
}
