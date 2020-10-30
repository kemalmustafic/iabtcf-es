[![NPM version](https://img.shields.io/npm/v/didomi-iabtcf-cli.svg?style=flat-square)](https://www.npmjs.com/package/didomi-iabtcf-cli)
[![npm module downloads per month](http://img.shields.io/npm/dm/didomi-iabtcf-cli.svg?style=flat)](https://www.npmjs.org/package/didomi-iabtcf-cli)
[![InteractiveAdvertisingBureau](https://circleci.com/gh/InteractiveAdvertisingBureau/iabtcf-es.svg?style=shield)](https://circleci.com/gh/InteractiveAdvertisingBureau/iabtcf-es)

# didomi-iabtcf-cli

command line decoding of iab TC String

#### Installation

npm

```
npm install -g didomi-iabtcf-cli
```

yarn

```
yarn add -g didomi-iabtcf-cli
```

#### Using

```
! tcstring COrVd1pOrVd1pACABCENAHCAAAAAAAAAAAiQAAAAAAAA
encoded: "COrVd1pOrVd1pACABCENAHCAAAAAAAAAAAiQAAAAAAAA"
version: 2
cmpId: 2
cmpVersion: 1
consentScreen: 2
consentLanguage: "EN"
created: Mon Dec 09 2019 18:01:46 GMT-0800 (Pacific Standard Time)
lastUpdated: Mon Dec 09 2019 18:01:46 GMT-0800 (Pacific Standard Time)
policyVersion: 2
isServiceSpecific: false
useNonStandardStacks: false
purposeOneTreatment: false
publisherCountryCode: "ES"
supportOOB: false
vendorListVersion: 7
purposeConsents
purposeLegitimateInterest
specialFeatureOptIns
publisherCustomConsents
publisherLegitimateInterest
publisherCustomConsents
publisherCustomLegitimateInterest
vendorConsents
vendorLegitimateInterest
vendorsDisclosed
vendorsAllowed
```
