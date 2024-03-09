<template>
	<div class="home">
		<BaseBanner :images="[1]" />
		<div class="home__notification">
			<div class="home__notification-container flex items-center text-white gap-[9px]">
				<i class="icon-lounds"></i>

				<div class="w-full home__notification-content-container">
					<div id="moving" class="absolute w-full h-full">
						<span  class="home__notification-content">
							{{ $nuxt.$i18n.t('notification') }}
						</span>
					</div>
				</div>
			</div>
		</div>
		<BaseFooter />
	</div>
</template>

<script>
	export default {
		layout: 'default',

		mounted() {
			this.animateText();
		},

		methods: {
			animateText() {
      	const textElement = document.getElementById('moving')
				let position = 100;

				const moveText = () => {
					if (position > -100) {
						position -= 1;
						textElement.style.right = `${position}%`;
						requestAnimationFrame(moveText);
					} else {
						position = 100;
						textElement.style.right = `${position}%`;
						requestAnimationFrame(moveText);
					}
				}

				moveText();
			}
		},
	}
</script>

<style lang="scss">
	.home {
		&__notification-container {
			padding: 4px 12px;

			i {
				font-size: 19.5px;
			}
		}
		&__notification-content {
			position: absolute;
			width: 100%;
			height: 100%;
			display: flex;
			align-items: center;
			left: 0;
			font-size: 12px;
			line-height: 14.52px;
		}

		&__notification-content-container {
			position: relative;
			overflow: hidden;
			height: 15px;
		}


		@keyframes moveText {
			0% {
				right: -100%;
			}
			100% {
				right: 100%;
			}
		}
	}
</style>