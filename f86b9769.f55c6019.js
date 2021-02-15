(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{104:function(e,n,i){"use strict";i.d(n,"a",(function(){return p})),i.d(n,"b",(function(){return f}));var t=i(0),r=i.n(t);function a(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function o(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function s(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?o(Object(i),!0).forEach((function(n){a(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function d(e,n){if(null==e)return{};var i,t,r=function(e,n){if(null==e)return{};var i,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)i=a[t],n.indexOf(i)>=0||(r[i]=e[i]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)i=a[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var c=r.a.createContext({}),l=function(e){var n=r.a.useContext(c),i=n;return e&&(i="function"==typeof e?e(n):s(s({},n),e)),i},p=function(e){var n=l(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var i=e.components,t=e.mdxType,a=e.originalType,o=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),p=l(i),b=t,f=p["".concat(o,".").concat(b)]||p[b]||u[b]||a;return i?r.a.createElement(f,s(s({ref:n},c),{},{components:i})):r.a.createElement(f,s({ref:n},c))}));function f(e,n){var i=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=i.length,o=new Array(a);o[0]=b;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s.mdxType="string"==typeof e?e:t,o[1]=s;for(var c=2;c<a;c++)o[c]=i[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,i)}b.displayName="MDXCreateElement"},98:function(e,n,i){"use strict";i.r(n),i.d(n,"frontMatter",(function(){return o})),i.d(n,"metadata",(function(){return s})),i.d(n,"toc",(function(){return d})),i.d(n,"default",(function(){return l}));var t=i(3),r=i(7),a=(i(0),i(104)),o={id:"example--core-functions-in-bash",title:"Core Functions (CLI)"},s={unversionedId:"didkit/example--core-functions-in-bash",id:"didkit/example--core-functions-in-bash",isDocsHomePage:!1,title:"Core Functions (CLI)",description:"Introduction",source:"@site/docs/didkit/example--core-functions-in-bash.md",slug:"/didkit/example--core-functions-in-bash",permalink:"/docs/didkit/example--core-functions-in-bash",editUrl:"https://github.com/spruceid/docs/didkit/example--core-functions-in-bash.md",version:"current",sidebar:"docs",previous:{title:"Overview of Examples",permalink:"/docs/didkit/examples"},next:{title:"Core Functions (HTTP)",permalink:"/docs/didkit/example--core-functions-in-curl"}},d=[{value:"Introduction",id:"introduction",children:[{value:"Start with a keypair",id:"start-with-a-keypair",children:[]},{value:"Generate a DID:Key document",id:"generate-a-didkey-document",children:[]},{value:"Define verificationMethod for keypair.",id:"define-verificationmethod-for-keypair",children:[]},{value:"Prepare credential for issuing.",id:"prepare-credential-for-issuing",children:[]},{value:"Issue the verifiable credential.",id:"issue-the-verifiable-credential",children:[]},{value:"Verify a verifiable credential.",id:"verify-a-verifiable-credential",children:[]},{value:"Create presentation embedding verifiable credential.",id:"create-presentation-embedding-verifiable-credential",children:[]},{value:"Issue verifiable presentation.",id:"issue-verifiable-presentation",children:[]},{value:"Verify verifiable presentation.",id:"verify-verifiable-presentation",children:[]},{value:"Appendix: whole script without comments",id:"appendix-whole-script-without-comments",children:[]}]}],c={toc:d};function l(e){var n=e.components,i=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},c,i,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"introduction"},"Introduction"),Object(a.b)("p",null,"This is an example shell script using all the core functions of DIDKit-CLI: key generation, credential/presentation issuance and verification."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Note: This script is meant to be in a DIDKit-CLI source directory. See the complete script below for setup details.")),Object(a.b)("h3",{id:"start-with-a-keypair"},"Start with a keypair"),Object(a.b)("p",null,"DIDKit can generate a unique ed25119 keypair from entropy. Alternately, you can provide a static key locally."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"if [ -e issuer_key.jwk ]; then\n    echo 'Using existing keypair.'\nelse\n    didkit generate-ed25519-key > issuer_key.jwk\n    echo 'Generated keypair.'\nfi\n\necho\n")),Object(a.b)("h3",{id:"generate-a-didkey-document"},"Generate a DID:Key document"),Object(a.b)("p",null,"This document gets wrapped around the keypair generated (or passed) in the previous step. For more context on the DID:key method, see the ",Object(a.b)("a",{parentName:"p",href:"https://w3c-ccg.github.io/did-method-key/"},"specification"),"."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"did=$(didkit key-to-did-key -k issuer_key.jwk)\nprintf 'DID: %s\\n\\n' \"$did\"\n")),Object(a.b)("h3",{id:"define-verificationmethod-for-keypair"},"Define verificationMethod for keypair."),Object(a.b)("p",null,"This is used to identify the key in linked data proofs. Verifiers of such proofs query a DID found in a credential based on what ","[registered]"," proof type (i.e., what kind of signatures) it needs key material to verify."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"verification_method=$(didkit key-to-verification-method -k issuer_key.jwk)\nprintf 'verificationMethod: %s\\n\\n' \"$verification_method\"\n")),Object(a.b)("h3",{id:"prepare-credential-for-issuing"},"Prepare credential for issuing."),Object(a.b)("p",null,"In this example credential, the issuance date, id, and credential subject id are arbitrary, but in real-world usage these are diverse and critical properties. For more info about what these properties mean, see the Verifiable Credentials Data Model ",Object(a.b)("a",{parentName:"p",href:"https://w3c.github.io/vc-data-model/"},"specification")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},'cat > credential-unsigned.jsonld <<EOF\n{\n    "@context": "https://www.w3.org/2018/credentials/v1",\n    "id": "http://example.org/credentials/3731",\n    "type": ["VerifiableCredential"],\n    "issuer": "$did",\n    "issuanceDate": "2020-08-19T21:41:50Z",\n    "credentialSubject": {\n        "id": "did:example:d23dd687a7dc6787646f2eb98d0"\n    }\n}\nEOF\n')),Object(a.b)("h3",{id:"issue-the-verifiable-credential"},"Issue the verifiable credential."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Ask didkit to issue a verifiable credential using the given keypair file, verification method, and proof purpose, passing the unsigned credential on standard input. "),Object(a.b)("li",{parentName:"ol"},"DIDKit creates a linked data proof to add to the credential, and outputs the resulting newly-issued verifiable credential on standard output, which we save to a file.")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"didkit vc-issue-credential \\\n    -k issuer_key.jwk \\\n    -v \"$verification_method\" \\\n    -p assertionMethod \\\n    < credential-unsigned.jsonld \\\n    > credential-signed.jsonld\necho 'Issued verifiable credential:'\nprint_json credential-signed.jsonld\necho\n")),Object(a.b)("h3",{id:"verify-a-verifiable-credential"},"Verify a verifiable credential."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"We pass the newly-issued verifiable credential back to didkit for verification using the given verification method and proof purpose. "),Object(a.b)("li",{parentName:"ul"},"DIDKit outputs the verification result as JSON. "),Object(a.b)("li",{parentName:"ul"},"If verification is successful, the command completes successfully (returns exit code 0).")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"if ! didkit vc-verify-credential \\\n    -v \"$verification_method\" \\\n    -p assertionMethod \\\n    < credential-signed.jsonld \\\n    > credential-verify-result.json\nthen\n    echo 'Unable to verify credential:'\n    print_json credential-verify-result.json\n    exit 1\nfi\necho 'Verified verifiable credential:'\nprint_json credential-verify-result.json\necho\n")),Object(a.b)("h3",{id:"create-presentation-embedding-verifiable-credential"},"Create presentation embedding verifiable credential."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Prepare to present the verifiable credential by wrapping it in a Verifiable Presentation. "),Object(a.b)("li",{parentName:"ul"},"The id here is an arbitrary URL for example purposes; VPs are often but not always uniquely identified, whether by identifiers, URLs, or URIs.")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},'cat > presentation-unsigned.jsonld <<EOF\n{\n    "@context": ["https://www.w3.org/2018/credentials/v1"],\n    "id": "http://example.org/presentations/3731",\n    "type": ["VerifiablePresentation"],\n    "holder": "$did",\n    "verifiableCredential": $(cat credential-signed.jsonld)\n}\nEOF\n')),Object(a.b)("h3",{id:"issue-verifiable-presentation"},"Issue verifiable presentation."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Pass the unsigned verifiable presentation to DIDKit to be issued as a verifiable presentation. * DIDKit signs the presentation with a linked data proof, using the given keypair, verification method and proof type. "),Object(a.b)("li",{parentName:"ul"},"We save the resulting newly created verifiable presentation to a file.")),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"In most use-cases, the ",Object(a.b)("inlineCode",{parentName:"p"},"holder")," field contains a DID or other identifier verifiably linked to the key material signing the presentation, which has some relationship to the credential(s) being presented. The classic example is a fresh and interactive proof of being the ","[human]"," subject identified by a credential, but there are many VP use-cases as well.  This may be a manual, consented, unique and interactive identity assurance operation, but it can also be an assurance of the identity of a machine or a legal entity, operated by an API call or an automation carried out by a fiduciary/trusted piece of software, etc."),Object(a.b)("p",{parentName:"div"},"In these examples, the keys representing the two parties are stored in expressive filenames, 'issuer_key' and 'holder_key'. There are, however, no differences between these keys, and the JWK filenames were chosen simply to clarify the example; there are no restrictions on them."))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"didkit vc-issue-presentation \\\n    -k issuer_key.jwk \\\n    -v \"$verification_method\" \\\n    -p authentication \\\n    < presentation-unsigned.jsonld \\\n    > presentation-signed.jsonld\necho 'Issued verifiable presentation:'\nprint_json presentation-signed.jsonld\necho\n")),Object(a.b)("h3",{id:"verify-verifiable-presentation"},"Verify verifiable presentation."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Pass the verifiable presentation back to didkit for verification."),Object(a.b)("li",{parentName:"ul"},"Examine the verification result JSON.")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"if ! didkit vc-verify-presentation \\\n    -v \"$verification_method\" \\\n    -p authentication \\\n    < presentation-signed.jsonld \\\n    > presentation-verify-result.json\nthen\n    echo 'Unable to verify presentation:'\n    print_json presentation-verify-result.json\n    exit 1\nfi\necho 'Verified verifiable presentation:'\nprint_json presentation-verify-result.json\necho\n\necho Done\n")),Object(a.b)("h3",{id:"appendix-whole-script-without-comments"},"Appendix: whole script without comments"),Object(a.b)("p",null,"Also available on Github as\n",Object(a.b)("a",{parentName:"p",href:"https://github.com/spruceid/didkit/blob/main/cli/tests/example.sh"},"/cli/tests/example.sh")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},'#!/bin/sh\n# This is an example shell script using DIDKit for key generation,\n# credential/presentation issuance and verification.\n\nset -e\n\nprint_json() {\n    file=${1?file}\n    if command -v jq >/dev/null 2>&1; then\n        jq . "$file" || cat "$file"\n    elif command -v json_pp >/dev/null 2>&1; then\n        json_pp < "$file" || cat "$file"\n    else\n        cat "$file"\n    fi\n}\n\ncd "$(dirname "$0")"\n\ncargo build -p didkit-cli\n\nexport PATH=$PWD/../../target/debug:$PATH\n\n# check for issuer key and generate verification method to match\n\nif [ -e issuer_key.jwk ]; then\n    echo \'Using existing keypair.\'\nelse\n    didkit generate-ed25519-key > issuer_key.jwk\n    echo \'Generated keypair.\'\nfi\necho\n\ndid=$(didkit key-to-did-key -k issuer_key.jwk)\nprintf \'DID: %s\\n\\n\' "$did"\n\nissuer_verification_method=$(didkit key-to-verification-method -k issuer_key.jwk)\nprintf \'issuer verificationMethod: %s\\n\\n\' "$issuer_verification_method"\n\ncat > credential-unsigned.jsonld <<EOF\n{\n    "@context": "https://www.w3.org/2018/credentials/v1",\n    "id": "http://example.org/credentials/3731",\n    "type": ["VerifiableCredential"],\n    "issuer": "$did",\n    "issuanceDate": "2020-08-19T21:41:50Z",\n    "credentialSubject": {\n        "id": "did:example:d23dd687a7dc6787646f2eb98d0"\n    }\n}\nEOF\n\ndidkit vc-issue-credential \\\n    -k issuer_key.jwk \\\n    -v "$verification_method" \\\n    -p assertionMethod \\\n    < credential-unsigned.jsonld \\\n    > credential-signed.jsonld\necho \'Issued verifiable credential:\'\nprint_json credential-signed.jsonld\necho\n\nif ! didkit vc-verify-credential \\\n    -v "$verification_method" \\\n    -p assertionMethod \\\n    < credential-signed.jsonld \\\n    > credential-verify-result.json\nthen\n    echo \'Unable to verify credential:\'\n    print_json credential-verify-result.json\n    exit 1\nfi\necho \'Verified verifiable credential:\'\nprint_json credential-verify-result.json\necho\n\n# check for holder key and generate verification method to match, \n# for creating verifiable presentation\n\nif [ -e holder_key.jwk ]; then\n    echo \'Using existing keypair.\'\nelse\n    didkit generate-ed25519-key > holder_key.jwk\n    echo \'Generated keypair.\'\nfi\necho\n\n# generate DID of using method DID:key from holder key\n\ndid=$(didkit key-to-did-key -k holder_key.jwk)\nprintf \'DID: %s\\n\\n\' "$did"\n\nholder_verification_method=$(didkit key-to-verification-method -k holder_key.jwk)\nprintf \'holder verificationMethod: %s\\n\\n\' "$holder_verification_method"\n\ncat > presentation-unsigned.jsonld <<EOF\n{\n    "@context": ["https://www.w3.org/2018/credentials/v1"],\n    "id": "http://example.org/presentations/3731",\n    "type": ["VerifiablePresentation"],\n    "holder": "$did",\n    "verifiableCredential": $(cat credential-signed.jsonld)\n}\nEOF\n\ndidkit vc-issue-presentation \\\n    -k holder_key.jwk \\\n    -v "$verification_method" \\\n    -p authentication \\\n    < presentation-unsigned.jsonld \\\n    > presentation-signed.jsonld\necho \'Issued verifiable presentation:\'\nprint_json presentation-signed.jsonld\necho\n\nif ! didkit vc-verify-presentation \\\n    -v "$verification_method" \\\n    -p authentication \\\n    < presentation-signed.jsonld \\\n    > presentation-verify-result.json\nthen\n    echo \'Unable to verify presentation:\'\n    print_json presentation-verify-result.json\n    exit 1\nfi\necho \'Verified verifiable presentation:\'\nprint_json presentation-verify-result.json\necho\n\necho Done\n')))}l.isMDXComponent=!0}}]);