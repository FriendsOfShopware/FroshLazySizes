# LazySizes for Shopware 6

[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE.md) [![Shopware Store](https://img.shields.io/badge/shopware-store-blue.svg?style=flat-square)](https://store.shopware.com/en/search?sSearch=FroshLazySizes)
 
This plugin has built-in Lazyloading with auto generated sizes for best fitting sizes.  
![2.png](src%2FResources%2Fstore%2Fimages%2F2.png)

## Install

Download the plugin from the release page and enable it in shopware.

### By composer

`composer require frosh/lazy-sizes`

### From source

Run `npm install` in `src/Resources/app/storefront` within the plugin directory

### By zip

download latest release and upload into admin:
https://github.com/FriendsOfShopware/FroshLazySizes/releases/latest/download/FroshLazySizes.zip

## Adding more thumbnail sizes:
- Save new size in the folder of the media management
- then run the command `bin/console media:generate-thumbnails` on the console to update the thumbnails for all images in the database
- Clear shop cache

## License

The MIT License (MIT). Please see [License File](LICENSE) for more information.
