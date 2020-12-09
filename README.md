# Cookie Consent Banner - Mitigation Solution

![Screen shot of just-eat.ie with cookie consent overlay](https://github.je-labs.com/simon-sanders/CookieConsent/blob/master/just-eat-ie-screen.PNG?raw=true)

This is a temporary script to load a Cookie Consent Banner for Ireland and Spain.

Everything is encapsulated in one file with a CSS style block and a JavaScript script block, deployed through the GTM container on all web pages in the target country.

## How it works



## Logic for displaying/hiding the consent banner

![Flow chart for the cookie consent banner](https://github.je-labs.com/simon-sanders/CookieConsent/blob/master/cookie-preferences.png?raw=true)

## Cookie/Storage exclusion lists:

```javascript
	cookieExclusionList: [
		'_dc_gtm_',
		'_ga',
		'_gac_',
		'_gid',
		'AMP_TOKEN',
		'incap_ses_',
		'je-',
		'nlbi_',
		'optimizelyEndUserId',
		'optimizelyRedirectData',
		'optimizelyDomainTestCookie',
		'optimizelyOptOut',
		'ravelinDeviceId',
		'ravelinSessionUuid',
		'ravelinUuid',
		'__zlcmid',
		'__zlcprivacy'
	],
	storageExclusionList: [
		"optimizely_data$$",
		"je-",
		"JE-"
	]
```

