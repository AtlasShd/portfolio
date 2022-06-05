'use strict';

const video = document.querySelector('.video__video'),
	controlPlay = document.querySelector('.controls__play'),
	bigPlay = document.querySelector('.video__big-play'),
	controlVolume = document.querySelector('.controls__volume'),
	videoProgress = document.querySelector('.controls__progress'),
	controlFullscreen = document.querySelector('.controls__fullscreen'),
	videoPlayer = document.querySelector('.video__player'),
	controlsPanel = document.querySelector('.video__controls'),
	videoPoster = document.querySelector('.video__poster'),
	volumeProgress = document.querySelector('.controls__progress-volume');

// play & pause video
function playPauseVideo() {
	if (video.paused) {
		video.play();
		controlPlay.innerHTML = `
			<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 36 36">
				<path d="M15.047 34.594v-33.194c0-0.618-0.498-1.116-1.126-1.116h-6.607c-0.628 0-1.126 0.498-1.126 1.116v33.194c0 0.618 0.498 1.126 1.126 1.126h6.607c0.628 0 1.126-0.498 1.126-1.126z"></path>
				<path d="M28.687 0.281h-6.607c-0.618 0-1.126 0.498-1.126 1.116v33.194c0 0.618 0.498 1.126 1.126 1.126h6.607c0.618 0 1.126-0.498 1.126-1.126v-33.194c0-0.618-0.498-1.116-1.126-1.116z"></path>
			</svg>
		`;
		bigPlay.classList.add('video__big-play_hide');
	} else {
		video.pause();
		controlPlay.innerHTML = `
			<svg width="30" height="30" viewBox="0 0 23 30" xmlns="http://www.w3.org/2000/svg">
				<g clip-path="url(#clip0)">
					<path d="M22.35 14.75L0 0C0 22.23 0 11.32 0 29.49L22.35 14.75Z" />
				</g>
			<defs>
				<clipPath id="clip0">
					<rect width="22.35" height="29.49" />
				</clipPath>
			</defs>
			</svg>`;
		bigPlay.classList.remove('video__big-play_hide');
	}
}

controlPlay.addEventListener('click', playPauseVideo);
bigPlay.addEventListener('click', playPauseVideo);


function setVideoProgress() {
	video.currentTime = (videoProgress.value * video.duration) / 100;
}

function leftColor(e) {
	videoProgress.style.background = `-webkit-linear-gradient(left, var(--gold) 0%, var(--gold) ${+videoProgress.value}%, #c4c4c4 ${+videoProgress.value}%, #c4c4c4 100%)`;
}

function getVideoProgress() {
	videoProgress.value = (video.currentTime / video.duration) * 100;
}

video.addEventListener('timeupdate', () => {
	getVideoProgress();
	leftColor();
});

videoPoster.addEventListener('click', playPauseVideo);

// stop video
function stopVideo() {
	// video.load();
	controlPlay.innerHTML = `
			<svg width="30" height="30" viewBox="0 0 23 30" xmlns="http://www.w3.org/2000/svg">
				<g clip-path="url(#clip0)">
					<path d="M22.35 14.75L0 0C0 22.23 0 11.32 0 29.49L22.35 14.75Z" />
				</g>
			<defs>
				<clipPath id="clip0">
					<rect width="22.35" height="29.49" />
				</clipPath>
			</defs>
			</svg>`;
	bigPlay.classList.remove('video__big-play_hide');
}

video.addEventListener('ended', stopVideo);

//volume control
let muteVideo, previousMute = volumeProgress.value;

function leftVolumeColor() {
	volumeProgress.style.background = `-webkit-linear-gradient(left, var(--gold) 0%, var(--gold) ${+volumeProgress.value}%, #c4c4c4 ${+volumeProgress.value}%, #c4c4c4 100%)`;
}

function setVolumeProgress() {
	video.volume = volumeProgress.value / 100;
	if (video.volume == 0) {
		controlVolume.innerHTML = `
		<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
				<path d="M17.995 2.95c-0.429 0-0.801 0.157-1.115 0.471l-8.248 8.248h-6.489c-0.43 0-0.801 0.157-1.115 0.471s-0.471 0.686-0.471 1.115v9.51c0 0.429 0.157 0.801 0.471 1.115s0.686 0.471 1.115 0.471h6.489l8.248 8.248c0.314 0.314 0.685 0.471 1.115 0.471s0.801-0.157 1.115-0.471 0.471-0.685 0.471-1.115v-26.948c0-0.429-0.157-0.801-0.47-1.115s-0.685-0.471-1.115-0.471z">
				</path>
				<path d="M31.902 18.679l3.468-3.468c0.22-0.22 0.33-0.488 0.33-0.802s-0.11-0.582-0.33-0.802l-1.604-1.604c-0.22-0.22-0.488-0.33-0.802-0.33s-0.582 0.11-0.802 0.33l-3.468 3.468-3.468-3.468c-0.22-0.22-0.488-0.33-0.802-0.33s-0.582 0.11-0.802 0.33l-1.604 1.604c-0.22 0.22-0.33 0.488-0.33 0.802s0.11 0.582 0.33 0.802l3.468 3.468-3.468 3.468c-0.22 0.22-0.33 0.488-0.33 0.802s0.11 0.582 0.33 0.802l1.604 1.604c0.22 0.22 0.488 0.33 0.802 0.33s0.582-0.11 0.802-0.33l3.468-3.468 3.468 3.468c0.22 0.22 0.487 0.33 0.802 0.33s0.582-0.11 0.802-0.33l1.604-1.604c0.22-0.22 0.33-0.488 0.33-0.802s-0.11-0.582-0.33-0.802l-3.468-3.468z">
				</path>
			</svg>
		`;
	} else if (video.volume < 0.33) {
		controlVolume.innerHTML = `
			<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
				<path d="M17.995 2.95c-0.429 0-0.801 0.157-1.115 0.471l-8.248 8.248h-6.489c-0.43 0-0.801 0.157-1.115 0.471s-0.471 0.686-0.471 1.115v9.51c0 0.429 0.157 0.801 0.471 1.115s0.686 0.471 1.115 0.471h6.489l8.248 8.248c0.314 0.314 0.685 0.471 1.115 0.471s0.801-0.157 1.115-0.471 0.471-0.685 0.471-1.115v-26.948c0-0.429-0.157-0.801-0.47-1.115s-0.685-0.471-1.115-0.471z">
				</path>
			</svg>
		`;
		previousMute = video.volume;
	} else if (video.volume < 0.66) {
		controlVolume.innerHTML = `
			<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
				<path  d="M17.995 2.95c-0.429 0-0.801 0.157-1.115 0.471l-8.248 8.248h-6.489c-0.43 0-0.801 0.157-1.115 0.471s-0.471 0.686-0.471 1.115v9.51c0 0.429 0.157 0.801 0.471 1.115s0.686 0.471 1.115 0.471h6.489l8.248 8.248c0.314 0.314 0.685 0.471 1.115 0.471s0.801-0.157 1.115-0.471 0.471-0.685 0.471-1.115v-26.948c0-0.429-0.157-0.801-0.47-1.115s-0.685-0.471-1.115-0.471z">
				</path>
				<path d="M28.040 21.515c0.702-1.081 1.053-2.249 1.053-3.505s-0.351-2.428-1.053-3.518c-0.702-1.090-1.63-1.858-2.787-2.304-0.165-0.082-0.372-0.124-0.619-0.124-0.429 0-0.801 0.153-1.115 0.458-0.314 0.307-0.471 0.681-0.471 1.127 0 0.347 0.099 0.64 0.298 0.879s0.437 0.446 0.718 0.619c0.28 0.173 0.561 0.363 0.842 0.57s0.52 0.499 0.718 0.879c0.198 0.38 0.297 0.851 0.297 1.412s-0.099 1.032-0.297 1.412c-0.198 0.38-0.437 0.673-0.718 0.879s-0.562 0.397-0.842 0.57c-0.281 0.173-0.52 0.38-0.718 0.619s-0.298 0.533-0.298 0.879c0 0.446 0.158 0.821 0.471 1.127 0.314 0.304 0.685 0.459 1.115 0.459 0.247 0 0.454-0.041 0.619-0.124 1.156-0.463 2.085-1.235 2.787-2.317z">
				</path>
			</svg>
		`;
		previousMute = video.volume;
	} else {
		controlVolume.innerHTML = `
			<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
				<path d="M17.995 2.95c-0.429 0-0.801 0.157-1.115 0.471l-8.248 8.248h-6.489c-0.43 0-0.801 0.157-1.115 0.471s-0.471 0.686-0.471 1.115v9.51c0 0.429 0.157 0.801 0.471 1.115s0.686 0.471 1.115 0.471h6.489l8.248 8.248c0.314 0.314 0.685 0.471 1.115 0.471s0.801-0.157 1.115-0.471 0.471-0.685 0.471-1.115v-26.948c0-0.429-0.157-0.801-0.47-1.115s-0.685-0.471-1.115-0.471z">
				</path>
				<path d="M28.040 21.515c0.702-1.081 1.053-2.249 1.053-3.505s-0.351-2.428-1.053-3.518c-0.702-1.090-1.63-1.858-2.787-2.304-0.165-0.082-0.372-0.124-0.619-0.124-0.429 0-0.801 0.153-1.115 0.458-0.314 0.307-0.471 0.681-0.471 1.127 0 0.347 0.099 0.64 0.298 0.879s0.437 0.446 0.718 0.619c0.28 0.173 0.561 0.363 0.842 0.57s0.52 0.499 0.718 0.879c0.198 0.38 0.297 0.851 0.297 1.412s-0.099 1.032-0.297 1.412c-0.198 0.38-0.437 0.673-0.718 0.879s-0.562 0.397-0.842 0.57c-0.281 0.173-0.52 0.38-0.718 0.619s-0.298 0.533-0.298 0.879c0 0.446 0.158 0.821 0.471 1.127 0.314 0.304 0.685 0.459 1.115 0.459 0.247 0 0.454-0.041 0.619-0.124 1.156-0.463 2.085-1.235 2.787-2.317z">
				</path>
				<path d="M33.327 25.008c1.404-2.137 2.106-4.471 2.106-6.999 0-2.527-0.702-4.859-2.106-6.999-1.404-2.137-3.262-3.695-5.573-4.669-0.214-0.082-0.429-0.124-0.644-0.124-0.429 0-0.801 0.157-1.115 0.471s-0.47 0.685-0.47 1.115c0 0.644 0.322 1.131 0.966 1.462 0.924 0.479 1.552 0.842 1.882 1.090 1.222 0.892 2.176 2.010 2.861 3.356s1.028 2.778 1.028 4.299c0 1.519-0.343 2.952-1.028 4.299-0.685 1.346-1.639 2.464-2.861 3.356-0.33 0.248-0.958 0.611-1.882 1.090-0.644 0.331-0.966 0.817-0.966 1.462 0 0.429 0.157 0.801 0.47 1.115s0.693 0.471 1.139 0.471c0.198 0 0.405-0.042 0.619-0.124 2.311-0.975 4.17-2.531 5.573-4.67z">
				</path>
			</svg>
		`;
		previousMute = video.volume;
	}
	muteVideo = video.volume;
}

setVolumeProgress();

// function getVolumeProgress() {
// 	volumeProgress.value = video.volume * 100;
// }

function changeVolumeUsingButton() {
	if (muteVideo) {
		volumeProgress.value = 0;
	} else {
		volumeProgress.value = previousMute * 100;
	}
	setVolumeProgress();
	leftVolumeColor();
}

controlVolume.addEventListener('click', changeVolumeUsingButton);

//fullscreen
function changeFullscreen() {
	if (!document.fullscreenElement) {
		videoPlayer.requestFullscreen();
		controlFullscreen.innerHTML = `
		<svg width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
		<path d="M28.2554 7.74495H35.9764V12.8119H23.1874V0.0229492H28.2544V7.74395L28.2554 7.74495ZM23.1884 35.976V23.1869H35.9774V28.2539H28.2564V35.9749H23.1894L23.1884 35.976ZM7.74544 7.74495V0.0239492H12.8124V12.8129H0.0234375V7.74595H7.74444L7.74544 7.74495ZM0.0244375 28.2549V23.1879H12.8134V35.977H7.74644V28.2559H0.0254375L0.0244375 28.2549Z" />
		</svg>
			`;
	} else if (document.exitFullscreen) {
		document.exitFullscreen();
		controlFullscreen.innerHTML = `
		<svg width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
		<path d="M31.744 31.7534H23.2432V35.9999H35.9995V23.2402H31.744V31.7534Z" /><path d="M4.25546 23.2402H0V35.9999H12.7563V31.7534H4.25546V23.2402Z" /><path d="M0 12.7597H4.25546V4.25656H12.7563V0H0V12.7597Z" fill="#B3B3B3" /><path d="M23.2432 0V4.25656H31.744V12.7597H35.9995V0H23.2432Z" />
		</svg>
		`;
	}
}

controlFullscreen.addEventListener('click', changeFullscreen);

videoPlayer.addEventListener('dblclick', changeFullscreen);


//hide controls panel

let timer;

function showHideControlsPanel() {
	clearTimeout(timer);
	controlsPanel.classList.remove('controls_hide');

	timer = setTimeout(() => {
		controlsPanel.classList.add('controls_hide');
	}, 5000);
	if (video.paused) {
		clearTimeout(timer);
	}
}

videoPlayer.addEventListener('click', showHideControlsPanel);

videoPlayer.addEventListener('click', () => {
	videoPoster.classList.add('video__poster_animate');
	videoPlayer.addEventListener('animationend', () => {
		videoPoster.classList.remove('video__poster_animate');
	});
	videoPlayer.addEventListener('mousemove', showHideControlsPanel);
}, { once: true });