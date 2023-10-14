# 1.0.5

* Add ability to disable lazysizes through cms section or block or variable
## Selectively deactivate plugins lazysizes and lazyloading function
This might be useful to optimize loading images `above the fold` or if you don't like to use the plugin for specific images or tooltip.

### Specific images
Add variable `lazysizes` with value `false` before using `sw_thumbnails` in the template.

### Cms sections
Add css class `no-lazysizes` to your sections

### Cms blocks
Add css class `no-lazysizes` to your block

#### Overwrite `no-lazysizes` of sections class in block
Add class `lazysizes` to your block

# 1.0.4

* Fix image presentation on Safari browser

# 1.0.3

* Add configuration to calculate better sizes and ratio to introduce better support for FroshPlatformThumbnailProcessor
* Use object-fit given into thumbnail utility

# 1.0.2

* Rebuild assets for shopware 6.4

# 1.0.1

* Fix encoding for images in folder thumbnail

# 1.0.0

* Initial release of feature extracted from FroshPlatformThumbnailProcessor
