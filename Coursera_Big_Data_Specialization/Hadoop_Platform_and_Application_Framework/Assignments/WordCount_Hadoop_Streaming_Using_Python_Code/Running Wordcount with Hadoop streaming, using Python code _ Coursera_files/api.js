define("bundles/verification/data/api",["require","exports","module","q","bundles/phoenix/lib/apiWrapper"],function(require,exports,module){"use strict";var e=require("q"),r=require("bundles/phoenix/lib/apiWrapper"),i=r("/maestro/api/credentials/create_keytrac_profile"),t=r("/maestro/api/credentials/save_phoenix_verification_photo");module.exports={registerKeystrokes:function registerKeystrokes(r){return e(i.post("",{data:r}))},registerFacePhoto:function registerFacePhoto(r){return e(t.post("",{data:r}))}}});