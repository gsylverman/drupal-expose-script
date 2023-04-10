<?php

namespace Drupal\my_module\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a custom block that loads a JavaScript file.
 *
 * @Block(
 *   id = "my_module_custom_block",
 *   admin_label = @Translation("My Module Custom Block"),
 *   category = @Translation("My Module")
 * )
 */
class MyModuleCustomBlock extends BlockBase {

  public function build() {
    return [
      '#markup' => '',
      '#attached' => [
        'library' => [
          'my_module_library',
        ],
      ],
    ];
  }

}