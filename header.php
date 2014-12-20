<?php
/**
 *  Header template
 *
 * @package Solum
 * @since 1.0
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<?php tha_head_top(); ?>

	<meta charset="<?php bloginfo( 'charset' ); ?>" />
	<meta name="viewport" content="width=device-width" />
	<title><?php wp_title(); ?></title>
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
	
	<?php tha_head_bottom(); ?>
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
	<div id="page">

		<?php tha_header_before(); ?>
		<?php

			if ( !function_exists( 'thmfdn_header' ) ) {
				function thmfdn_header() {
					?>

					<nav class="top-bar" data-topbar role="navigation">
						<?php tha_header_top(); ?>
						<ul class="title-area">
							<li class="name"><?php echo apply_filters( 'site_name', '<h1 class="site-title"><a href="' . esc_url( home_url( '/' ) ) . '">' . get_bloginfo('name') . '</a></h1>' ); ?></li>
							<!-- Remove the class "menu-icon" to get rid of menu icon. Take out "Menu" to just have icon alone -->
							<li class="toggle-topbar menu-icon"><a href="#"><span>Menu</span></a></li>
						</ul>

						<section class="top-bar-section">
							<!-- Right Nav Section -->
							<?php
								wp_nav_menu( array(
									'theme_location' => 'header-menu',
									'fallback_cb' => false,
									'menu_class' => 'right'
								) );
							?>

							<!-- Left Nav Section -->
							<?php echo apply_filters( 'site_description', '<ul class="left"><li class="site-description">' . get_bloginfo( 'description' ) ) . '</li></ul>'; ?>

						</section>
						<?php tha_header_bottom(); ?>
					</nav>

					<?php
				}
			}

			thmfdn_header();

		?>
		<?php tha_header_after(); ?>
