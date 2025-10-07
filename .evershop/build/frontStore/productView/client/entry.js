
      import React from 'react';
      import ReactDOM from 'react-dom';
      import { Area } from '@evershop/evershop/components/common';
      import {HydrateFrontStore} from '@evershop/evershop/components/common';
      
import e749d0c2d08431465d99a3c437b4c2789 from 'file:///C:/CodingStuff/KTPM/node_modules/@evershop/evershop/dist/modules/catalog/pages/frontStore/all/SearchBox.js';
import e69deb3b684adf2536911be713ce9a3ba from 'file:///C:/CodingStuff/KTPM/node_modules/@evershop/evershop/dist/modules/catalog/pages/frontStore/productView/Attributes.js';
import e93f63037b5434bad4d5144685ce06c5b from 'file:///C:/CodingStuff/KTPM/node_modules/@evershop/evershop/dist/modules/catalog/pages/frontStore/productView/Description.js';
import e2f2ea87092e661aed0c627b20f9ce9f1 from 'file:///C:/CodingStuff/KTPM/node_modules/@evershop/evershop/dist/modules/catalog/pages/frontStore/productView/Form.js';
import e305361f365679124538eb0018431ef31 from 'file:///C:/CodingStuff/KTPM/node_modules/@evershop/evershop/dist/modules/catalog/pages/frontStore/productView/GeneralInfo.js';
import e1c80db03a8289c96b90e0014e548c398 from 'file:///C:/CodingStuff/KTPM/node_modules/@evershop/evershop/dist/modules/catalog/pages/frontStore/productView/Images.js';
import e51d73d8a1b85deb3a6ae70a99fde383f from 'file:///C:/CodingStuff/KTPM/node_modules/@evershop/evershop/dist/modules/catalog/pages/frontStore/productView/Layout.js';
import ee07e578bc101f4b01799299c77209a39 from 'file:///C:/CodingStuff/KTPM/node_modules/@evershop/evershop/dist/modules/catalog/pages/frontStore/productView/Options.js';
import ee17c740ae9ada32c65afdb62a28d3b5a from 'file:///C:/CodingStuff/KTPM/node_modules/@evershop/evershop/dist/modules/catalog/pages/frontStore/productView/Variants.js';
import e49ac096dfe906740f0c3f7ff8e12e1a0 from 'file:///C:/CodingStuff/KTPM/node_modules/@evershop/evershop/dist/modules/checkout/pages/frontStore/all/MiniCart.js';
import e45913650180cbd18ad9c29a51dfcf1a0 from 'file:///C:/CodingStuff/KTPM/node_modules/@evershop/evershop/dist/modules/cms/pages/frontStore/all/Breadcrumb.js';
import eeda61aa0413a36817c91c0e165203255 from 'file:///C:/CodingStuff/KTPM/node_modules/@evershop/evershop/dist/modules/cms/pages/frontStore/all/Footer.js';
import ecbf72d95212af663e8cec41573eee35b from 'file:///C:/CodingStuff/KTPM/node_modules/@evershop/evershop/dist/modules/cms/pages/frontStore/all/HeadTags.js';
import e67a08c1a000ecef39b087fb1dca2351f from 'file:///C:/CodingStuff/KTPM/node_modules/@evershop/evershop/dist/modules/cms/pages/frontStore/all/Layout.js';
import ee9b98c29aa5fa989c8f80b752d9583f8 from 'file:///C:/CodingStuff/KTPM/node_modules/@evershop/evershop/dist/modules/cms/pages/frontStore/all/Logo.js';
import eaf4b89b1069319b85f41a68ad909e5d7 from 'file:///C:/CodingStuff/KTPM/node_modules/@evershop/evershop/dist/modules/cms/pages/frontStore/all/Notification.js';
import ea125ac8a8b17f0f1114217b5f161c34b from 'file:///C:/CodingStuff/KTPM/node_modules/@evershop/evershop/dist/modules/customer/pages/frontStore/all/UserIcon.js';
import collection_products from 'file:///C:/CodingStuff/KTPM/node_modules/@evershop/evershop/dist/components/frontStore/widgets/CollectionProducts.js';
import text_block from 'file:///C:/CodingStuff/KTPM/node_modules/@evershop/evershop/dist/components/frontStore/widgets/TextBlock.js';
import basic_menu from 'file:///C:/CodingStuff/KTPM/node_modules/@evershop/evershop/dist/components/frontStore/widgets/BasicMenu.js';
Area.defaultProps.components = {
  'icon-wrapper': {
    e749d0c2d08431465d99a3c437b4c2789: {
      id: 'e749d0c2d08431465d99a3c437b4c2789',
      sortOrder: 5,
      component: { default: e749d0c2d08431465d99a3c437b4c2789 }
    },
    e49ac096dfe906740f0c3f7ff8e12e1a0: {
      id: 'e49ac096dfe906740f0c3f7ff8e12e1a0',
      sortOrder: 10,
      component: { default: e49ac096dfe906740f0c3f7ff8e12e1a0 }
    },
    ea125ac8a8b17f0f1114217b5f161c34b: {
      id: 'ea125ac8a8b17f0f1114217b5f161c34b',
      sortOrder: 30,
      component: { default: ea125ac8a8b17f0f1114217b5f161c34b }
    }
  },
  productViewGeneralInfo: {
    e69deb3b684adf2536911be713ce9a3ba: {
      id: 'e69deb3b684adf2536911be713ce9a3ba',
      sortOrder: 25,
      component: { default: e69deb3b684adf2536911be713ce9a3ba }
    }
  },
  productPageMiddleRight: {
    e93f63037b5434bad4d5144685ce06c5b: {
      id: 'e93f63037b5434bad4d5144685ce06c5b',
      sortOrder: 50,
      component: { default: e93f63037b5434bad4d5144685ce06c5b }
    },
    e2f2ea87092e661aed0c627b20f9ce9f1: {
      id: 'e2f2ea87092e661aed0c627b20f9ce9f1',
      sortOrder: 45,
      component: { default: e2f2ea87092e661aed0c627b20f9ce9f1 }
    },
    e305361f365679124538eb0018431ef31: {
      id: 'e305361f365679124538eb0018431ef31',
      sortOrder: 10,
      component: { default: e305361f365679124538eb0018431ef31 }
    },
    ee07e578bc101f4b01799299c77209a39: {
      id: 'ee07e578bc101f4b01799299c77209a39',
      sortOrder: 30,
      component: { default: ee07e578bc101f4b01799299c77209a39 }
    },
    ee17c740ae9ada32c65afdb62a28d3b5a: {
      id: 'ee17c740ae9ada32c65afdb62a28d3b5a',
      sortOrder: 35,
      component: { default: ee17c740ae9ada32c65afdb62a28d3b5a }
    }
  },
  productPageMiddleLeft: {
    e1c80db03a8289c96b90e0014e548c398: {
      id: 'e1c80db03a8289c96b90e0014e548c398',
      sortOrder: 10,
      component: { default: e1c80db03a8289c96b90e0014e548c398 }
    }
  },
  content: {
    e51d73d8a1b85deb3a6ae70a99fde383f: {
      id: 'e51d73d8a1b85deb3a6ae70a99fde383f',
      sortOrder: 10,
      component: { default: e51d73d8a1b85deb3a6ae70a99fde383f }
    },
    e45913650180cbd18ad9c29a51dfcf1a0: {
      id: 'e45913650180cbd18ad9c29a51dfcf1a0',
      sortOrder: 0,
      component: { default: e45913650180cbd18ad9c29a51dfcf1a0 }
    }
  },
  footer: {
    eeda61aa0413a36817c91c0e165203255: {
      id: 'eeda61aa0413a36817c91c0e165203255',
      sortOrder: 10,
      component: { default: eeda61aa0413a36817c91c0e165203255 }
    }
  },
  head: {
    ecbf72d95212af663e8cec41573eee35b: {
      id: 'ecbf72d95212af663e8cec41573eee35b',
      sortOrder: 5,
      component: { default: ecbf72d95212af663e8cec41573eee35b }
    }
  },
  body: {
    e67a08c1a000ecef39b087fb1dca2351f: {
      id: 'e67a08c1a000ecef39b087fb1dca2351f',
      sortOrder: 1,
      component: { default: e67a08c1a000ecef39b087fb1dca2351f }
    },
    eaf4b89b1069319b85f41a68ad909e5d7: {
      id: 'eaf4b89b1069319b85f41a68ad909e5d7',
      sortOrder: 10,
      component: { default: eaf4b89b1069319b85f41a68ad909e5d7 }
    }
  },
  header: {
    ee9b98c29aa5fa989c8f80b752d9583f8: {
      id: 'ee9b98c29aa5fa989c8f80b752d9583f8',
      sortOrder: 10,
      component: { default: ee9b98c29aa5fa989c8f80b752d9583f8 }
    }
  },
  '*': {
    collection_products: {
      id: 'collection_products',
      sortOrder: 0,
      component: { default: collection_products }
    },
    text_block: {
      id: 'text_block',
      sortOrder: 0,
      component: { default: text_block }
    },
    basic_menu: {
      id: 'basic_menu',
      sortOrder: 0,
      component: { default: basic_menu }
    }
  }
} 
ReactDOM.hydrate(
        React.createElement(HydrateFrontStore, null),
        document.getElementById('app')
      );