<?php
/**
 *  Footer template
 *
 * @package Solum
 * @since 1.0
 */
?>

		<?php tha_footer_before(); ?>
		<?php

			if ( !function_exists( 'thmfdn_footer' ) ) {
				function thmfdn_footer() {
					?>

					<div id="footer" class="row site-footer" role="contentinfo">
						<?php tha_footer_top(); ?>

						<?php echo apply_filters( 'thmfdn_credits', '<p class="site-credits">&copy;  <a href="' . esc_url( home_url( '/' ) ) . '">' . get_bloginfo('name') . '</a></p>' ); ?>

						<?php tha_footer_bottom(); ?>
					</div><!--#footer.row-->

					<?php
				}
			}

			thmfdn_footer();
		?>
		<?php tha_footer_after(); ?>

	</div><!--#page-->

	<?php wp_footer(); ?>

</body>
</html>