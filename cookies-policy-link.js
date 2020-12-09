<script>
	try {
		var cookiePreferenceLink = document.createElement('p');
		cookiePreferenceLink.innerHTML = '<a name="openCookiePreferences" style="color: rgb(38, 106, 189);cursor:pointer;" onclick="dataLayer.push({\'event\':\'showConsent\'})">Open cookie preferences</a>';
		var mainText = document.getElementsByClassName('main-text')[0];
		mainText.appendChild(cookiePreferenceLink);
	}
	catch(e) {
		console.log(e)
	}
</script>