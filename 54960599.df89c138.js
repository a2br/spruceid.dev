(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{105:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),d=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),u=r,m=p["".concat(o,".").concat(u)]||p[u]||b[u]||a;return n?i.a.createElement(m,l(l({ref:t},c),{},{components:n})):i.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},78:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var r=n(3),i=n(7),a=(n(0),n(105)),o={id:"install",title:"Installation"},l={unversionedId:"credible/install",id:"credible/install",isDocsHomePage:!1,title:"Installation",description:"App stores",source:"@site/docs/credible/install.md",slug:"/credible/install",permalink:"/docs/credible/install",editUrl:"https://github.com/spruceid/docs/credible/install.md",version:"current",sidebar:"docs",previous:{title:"Core Concepts",permalink:"/docs/credible/concepts"},next:{title:"Authenticating to other services",permalink:"/docs/credible/authn"}},s=[{value:"App stores",id:"app-stores",children:[]},{value:"Manual Build (iOS or Android)",id:"manual-build-ios-or-android",children:[{value:"Android Specific Instructions:",id:"android-specific-instructions",children:[]},{value:"iOS Specific Instructions:",id:"ios-specific-instructions",children:[]},{value:"Platform agnostic final steps:",id:"platform-agnostic-final-steps",children:[]}]},{value:"Setup &amp; Testing",id:"setup--testing",children:[]},{value:"Seed Recovery",id:"seed-recovery",children:[]}],c={toc:s};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"app-stores"},"App stores"),Object(a.b)("p",null,"Links and qR codes for app stores coming soon (future releases)."),Object(a.b)("h2",{id:"manual-build-ios-or-android"},"Manual Build (iOS or Android)"),Object(a.b)("p",null,"Regardless of target platform manual build of this project has the\nfollowing dependencies:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Two other Spruce projects, ",Object(a.b)("inlineCode",{parentName:"p"},"didkit")," and ",Object(a.b)("inlineCode",{parentName:"p"},"ssi"),".\n",Object(a.b)("a",{parentName:"p",href:"https://github.com/spruceid/didkit"},"DIDKit")," depends on\n",Object(a.b)("a",{parentName:"p",href:"https://github.com/spruceid/ssi"},"ssi"),", so clone and build install the latter\nfirst. To work with build scripts depending on relative paths, created a\ndirectory named something like ",Object(a.b)("inlineCode",{parentName:"p"},"spruceid")," and clone ",Object(a.b)("inlineCode",{parentName:"p"},"credible"),", ",Object(a.b)("inlineCode",{parentName:"p"},"didkit"),", and\n",Object(a.b)("inlineCode",{parentName:"p"},"ssi")," next to eachother. thereafter, work from the ",Object(a.b)("inlineCode",{parentName:"p"},"credible")," directory.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"A nightly build of the rust compiler, most easily obtained using\n",Object(a.b)("a",{parentName:"p",href:"https://www.rust-lang.org/tools/install"},"rustup"),". Once installed,\nnightly can be enabled globally using:"))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"$ rustup default nightly \n")),Object(a.b)("p",null,"Or on a per-project level by running the following in the root of the\ntargeted cargo project:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"$ rustup override set nightly\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Java 7 or higher (path to SDK's /bin/ folder must be set in environmental\nvariables for ",Object(a.b)("inlineCode",{parentName:"p"},"make")," calls to ",Object(a.b)("inlineCode",{parentName:"p"},"javac"),")")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("a",{parentName:"p",href:"https://flutter.dev/docs/get-started/install"},"Flutter")," set to the\ndev channel. This is done on *nix type systems after installation\nby running:"))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"$ flutter channel dev\n$ flutter upgrade\n")),Object(a.b)("h3",{id:"android-specific-instructions"},"Android Specific Instructions:"),Object(a.b)("p",null,"Android builds have the additional requirement of:"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://developer.android.com/studio/install"},"Android Studio")," which must be\ninstalled, then opened for the first time to allow further dependencies to be\ninstalled. Addiontally, requires the installation of Android NDK in Android\nStudio by going to Settings > Appearance & Behavior > System Settings >\nAndroid SDK. Select and install the NDK (Side by Side)."),Object(a.b)("p",null,"After that, the following will need to be run from the root of ",Object(a.b)("inlineCode",{parentName:"p"},"didkit"),":\n(Note, this may take some time as it runs several builds for different targets)"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"$ export ANDROID_SDK_ROOT=/path/to/Android/sdk\n$ make -C lib install-rustup-android\n$ make -C lib ../target/test/java.stamp\n$ make -C lib ../target/test/aar.stamp\n$ make -C lib ../target/test/flutter.stamp\n$ cargo build\n")),Object(a.b)("h3",{id:"ios-specific-instructions"},"iOS Specific Instructions:"),Object(a.b)("p",null,"iOS builds have the additional requirement of cocoapods, which can\nbe installed on MacOS using ",Object(a.b)("inlineCode",{parentName:"p"},"brew"),":"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"$ brew install cocoapods\n")),Object(a.b)("p",null,"If building for iOS, the following will need to be run from the root of ",Object(a.b)("inlineCode",{parentName:"p"},"didkit"),":\n(Note, this may take some time as it runs several builds for different targets)"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"$ make -C lib install-rustup-ios \n$ make -C lib ../target/test/ios.stamp\n$ cargo build\n")),Object(a.b)("h3",{id:"platform-agnostic-final-steps"},"Platform agnostic final steps:"),Object(a.b)("p",null,"Regardless of platform, run the following:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"$ flutter doctor\n")),Object(a.b)("p",null,"If any issues are detected, please resolve them before proceeding."),Object(a.b)("p",null,"Then, to build the flutter artifacts, run one of the following\ncommands from the root of the ",Object(a.b)("inlineCode",{parentName:"p"},"credible")," repository to either build\nor run the app on an emulator/connected dev-device:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"$ flutter build apk --no-sound-null-safety                            # Android APK\n$ flutter build appbundle --no-sound-null-safety                      # Android Appbundle\n$ flutter build ios --no-sound-null-safety --no-codesign --simulator  # iOS for simulator\n$ flutter run  --no-sound-null-safety                                 # Run on emulator\n")),Object(a.b)("p",null,"(NOTE: While our implmentation does not require ",Object(a.b)("inlineCode",{parentName:"p"},"--no-sound-null-safely")," flag, some\ndependencies currently do not)"),Object(a.b)("p",null,"If any errors are encountered, the first thing to try is running"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"$ flutter clean\n")),Object(a.b)("p",null,"From the root of ",Object(a.b)("inlineCode",{parentName:"p"},"credible")," then retrying the build or run."),Object(a.b)("h2",{id:"setup--testing"},"Setup & Testing"),Object(a.b)("p",null,"Coming soon."),Object(a.b)("h2",{id:"seed-recovery"},"Seed Recovery"),Object(a.b)("p",null,"Coming soon."))}d.isMDXComponent=!0}}]);