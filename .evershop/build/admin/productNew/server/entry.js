import React from 'react'; 
import ReactDOM from 'react-dom'; 
import { Area } from '@evershop/evershop/components/common';
import { renderHtml } from '@evershop/evershop/components/common';
import e397f6428aec4d7470e85f367ca7fefe4 from 'file:///C:/CodingStuff/KTPM/node_modules/@evershop/evershop/dist/modules/auth/pages/admin/all/AdminUser.js';
import eb9a80a6f207aaeaec65e34f2dc3a0612 from 'file:///C:/CodingStuff/KTPM/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/all/CatalogMenuGroup.js';
import e58df0b371131d4a3aa63128931b09fe5 from 'file:///C:/CodingStuff/KTPM/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/all/NewProductQuickLink.js';
import ee1ead8f8eacd011e32b90df2cd49e2f0 from 'file:///C:/CodingStuff/KTPM/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/productEdit+productNew/Attributes.js';
import eea6da1f69108e28c30b8109d66eff7a9 from 'file:///C:/CodingStuff/KTPM/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/productEdit+productNew/FormContent.js';
import ef46d61a98a0a56e2140a88b3cefc8ffd from 'file:///C:/CodingStuff/KTPM/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/productEdit+productNew/General.js';
import ecd377d3120fb6e7d8213430f5ff2e0a7 from 'file:///C:/CodingStuff/KTPM/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/productEdit+productNew/Inventory.js';
import e22b4e768ed33f34211ede41cf0dfe6d4 from 'file:///C:/CodingStuff/KTPM/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/productEdit+productNew/Media.js';
import eac1fe59af2cfb8b23a8e9c6ee9ab488b from 'file:///C:/CodingStuff/KTPM/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/productEdit+productNew/PageHeading.js';
import eb07ffa67f1a2465efb6b5b5c024f8fd1 from 'file:///C:/CodingStuff/KTPM/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/productEdit+productNew/Seo.js';
import e4c72dc2f7fb69cef3518e35d4b392d3e from 'file:///C:/CodingStuff/KTPM/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/productEdit+productNew/Status.js';
import e61e4397e0f53aaee2410814bbfede7dc from 'file:///C:/CodingStuff/KTPM/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/productNew/ProductNewForm.js';
import e9655f212b7af30a78ef468ee038a3887 from 'file:///C:/CodingStuff/KTPM/node_modules/@evershop/evershop/dist/modules/checkout/pages/admin/all/ShippingSettingMenu.js';
import e30c980e946ce630ca0a3b113a4beecf6 from 'file:///C:/CodingStuff/KTPM/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/CmsMenuGroup.js';
import ea489c0bfc05217bc17d02192e0f5af03 from 'file:///C:/CodingStuff/KTPM/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/CopyRight.js';
import e86c8ca197c0d4264062be2572d4efa51 from 'file:///C:/CodingStuff/KTPM/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Layout.js';
import ec3b19af9cbbb268c40ad8576b269cb4f from 'file:///C:/CodingStuff/KTPM/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Logo.js';
import e635f14efd75d9409106d02fc94542bc3 from 'file:///C:/CodingStuff/KTPM/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Meta.js';
import e27497ed4cc85c2e8478675c21d44be7d from 'file:///C:/CodingStuff/KTPM/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Navigation.js';
import ecf7dabc19f03f918c01601d8dc51db01 from 'file:///C:/CodingStuff/KTPM/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Notification.js';
import ef0b73927c2efe326499760b6d3659d71 from 'file:///C:/CodingStuff/KTPM/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/QuickLinks.js';
import ef7ce922a1a981b2728ae09f92af9d368 from 'file:///C:/CodingStuff/KTPM/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/SearchBox.js';
import ec25e81e48153065d5d77fd2c72eea10d from 'file:///C:/CodingStuff/KTPM/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Version.js';
import e85fa64c492445fe1d80d12462ee766ee from 'file:///C:/CodingStuff/KTPM/node_modules/@evershop/evershop/dist/modules/customer/pages/admin/all/CustomerMenuGroup.js';
import edfe9c6df298d77cb62abbb5ccddf848f from 'file:///C:/CodingStuff/KTPM/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/all/OmsMenuGroup.js';
import e0cb560fa0aaa843d6ce381293dbd0ca0 from 'file:///C:/CodingStuff/KTPM/node_modules/@evershop/evershop/dist/modules/promotion/pages/admin/all/CouponMenuGroup.js';
import ee283023b128112bd37d5a04f79801b06 from 'file:///C:/CodingStuff/KTPM/node_modules/@evershop/evershop/dist/modules/promotion/pages/admin/all/NewCouponQuickLink.js';
import ea952338177576fac07b9008da4e39a85 from 'file:///C:/CodingStuff/KTPM/node_modules/@evershop/evershop/dist/modules/setting/pages/admin/all/PaymentSettingMenu.js';
import e17930bf77770e519b6a8ab6c89053b34 from 'file:///C:/CodingStuff/KTPM/node_modules/@evershop/evershop/dist/modules/setting/pages/admin/all/SettingMenuGroup.js';
import eb51593ab72bad014a4127393eb0ee5a3 from 'file:///C:/CodingStuff/KTPM/node_modules/@evershop/evershop/dist/modules/setting/pages/admin/all/StoreSettingMenu.js';
import ea500d676efa6067c6d0f6ba8249d06da from 'file:///C:/CodingStuff/KTPM/node_modules/@evershop/evershop/dist/modules/tax/pages/admin/all/TaxSettingMenu.js';
import collection_products from 'file:///C:/CodingStuff/KTPM/node_modules/@evershop/evershop/dist/components/admin/widgets/CollectionProductsSetting.js';
import text_block from 'file:///C:/CodingStuff/KTPM/node_modules/@evershop/evershop/dist/components/admin/widgets/TextBlockSetting.js';
import basic_menu from 'file:///C:/CodingStuff/KTPM/node_modules/@evershop/evershop/dist/components/admin/widgets/BasicMenuSetting.js';
export default renderHtml;
Area.defaultProps.components = {
  header: {
    e397f6428aec4d7470e85f367ca7fefe4: {
      id: 'e397f6428aec4d7470e85f367ca7fefe4',
      sortOrder: 50,
      component: { default: e397f6428aec4d7470e85f367ca7fefe4 }
    },
    ec3b19af9cbbb268c40ad8576b269cb4f: {
      id: 'ec3b19af9cbbb268c40ad8576b269cb4f',
      sortOrder: 10,
      component: { default: ec3b19af9cbbb268c40ad8576b269cb4f }
    },
    ef7ce922a1a981b2728ae09f92af9d368: {
      id: 'ef7ce922a1a981b2728ae09f92af9d368',
      sortOrder: 20,
      component: { default: ef7ce922a1a981b2728ae09f92af9d368 }
    }
  },
  adminMenu: {
    eb9a80a6f207aaeaec65e34f2dc3a0612: {
      id: 'eb9a80a6f207aaeaec65e34f2dc3a0612',
      sortOrder: 20,
      component: { default: eb9a80a6f207aaeaec65e34f2dc3a0612 }
    },
    e30c980e946ce630ca0a3b113a4beecf6: {
      id: 'e30c980e946ce630ca0a3b113a4beecf6',
      sortOrder: 60,
      component: { default: e30c980e946ce630ca0a3b113a4beecf6 }
    },
    ef0b73927c2efe326499760b6d3659d71: {
      id: 'ef0b73927c2efe326499760b6d3659d71',
      sortOrder: 10,
      component: { default: ef0b73927c2efe326499760b6d3659d71 }
    },
    e85fa64c492445fe1d80d12462ee766ee: {
      id: 'e85fa64c492445fe1d80d12462ee766ee',
      sortOrder: 40,
      component: { default: e85fa64c492445fe1d80d12462ee766ee }
    },
    edfe9c6df298d77cb62abbb5ccddf848f: {
      id: 'edfe9c6df298d77cb62abbb5ccddf848f',
      sortOrder: 30,
      component: { default: edfe9c6df298d77cb62abbb5ccddf848f }
    },
    e0cb560fa0aaa843d6ce381293dbd0ca0: {
      id: 'e0cb560fa0aaa843d6ce381293dbd0ca0',
      sortOrder: 50,
      component: { default: e0cb560fa0aaa843d6ce381293dbd0ca0 }
    },
    e17930bf77770e519b6a8ab6c89053b34: {
      id: 'e17930bf77770e519b6a8ab6c89053b34',
      sortOrder: 500,
      component: { default: e17930bf77770e519b6a8ab6c89053b34 }
    }
  },
  quickLinks: {
    e58df0b371131d4a3aa63128931b09fe5: {
      id: 'e58df0b371131d4a3aa63128931b09fe5',
      sortOrder: 20,
      component: { default: e58df0b371131d4a3aa63128931b09fe5 }
    },
    ee283023b128112bd37d5a04f79801b06: {
      id: 'ee283023b128112bd37d5a04f79801b06',
      sortOrder: 30,
      component: { default: ee283023b128112bd37d5a04f79801b06 }
    }
  },
  rightSide: {
    ee1ead8f8eacd011e32b90df2cd49e2f0: {
      id: 'ee1ead8f8eacd011e32b90df2cd49e2f0',
      sortOrder: 30,
      component: { default: ee1ead8f8eacd011e32b90df2cd49e2f0 }
    },
    ecd377d3120fb6e7d8213430f5ff2e0a7: {
      id: 'ecd377d3120fb6e7d8213430f5ff2e0a7',
      sortOrder: 15,
      component: { default: ecd377d3120fb6e7d8213430f5ff2e0a7 }
    },
    e4c72dc2f7fb69cef3518e35d4b392d3e: {
      id: 'e4c72dc2f7fb69cef3518e35d4b392d3e',
      sortOrder: 10,
      component: { default: e4c72dc2f7fb69cef3518e35d4b392d3e }
    }
  },
  productForm: {
    eea6da1f69108e28c30b8109d66eff7a9: {
      id: 'eea6da1f69108e28c30b8109d66eff7a9',
      sortOrder: 10,
      component: { default: eea6da1f69108e28c30b8109d66eff7a9 }
    }
  },
  leftSide: {
    ef46d61a98a0a56e2140a88b3cefc8ffd: {
      id: 'ef46d61a98a0a56e2140a88b3cefc8ffd',
      sortOrder: 10,
      component: { default: ef46d61a98a0a56e2140a88b3cefc8ffd }
    },
    e22b4e768ed33f34211ede41cf0dfe6d4: {
      id: 'e22b4e768ed33f34211ede41cf0dfe6d4',
      sortOrder: 15,
      component: { default: e22b4e768ed33f34211ede41cf0dfe6d4 }
    },
    eb07ffa67f1a2465efb6b5b5c024f8fd1: {
      id: 'eb07ffa67f1a2465efb6b5b5c024f8fd1',
      sortOrder: 60,
      component: { default: eb07ffa67f1a2465efb6b5b5c024f8fd1 }
    }
  },
  content: {
    eac1fe59af2cfb8b23a8e9c6ee9ab488b: {
      id: 'eac1fe59af2cfb8b23a8e9c6ee9ab488b',
      sortOrder: 5,
      component: { default: eac1fe59af2cfb8b23a8e9c6ee9ab488b }
    },
    e61e4397e0f53aaee2410814bbfede7dc: {
      id: 'e61e4397e0f53aaee2410814bbfede7dc',
      sortOrder: 10,
      component: { default: e61e4397e0f53aaee2410814bbfede7dc }
    }
  },
  settingPageMenu: {
    e9655f212b7af30a78ef468ee038a3887: {
      id: 'e9655f212b7af30a78ef468ee038a3887',
      sortOrder: 15,
      component: { default: e9655f212b7af30a78ef468ee038a3887 }
    },
    ea952338177576fac07b9008da4e39a85: {
      id: 'ea952338177576fac07b9008da4e39a85',
      sortOrder: 10,
      component: { default: ea952338177576fac07b9008da4e39a85 }
    },
    eb51593ab72bad014a4127393eb0ee5a3: {
      id: 'eb51593ab72bad014a4127393eb0ee5a3',
      sortOrder: 5,
      component: { default: eb51593ab72bad014a4127393eb0ee5a3 }
    },
    ea500d676efa6067c6d0f6ba8249d06da: {
      id: 'ea500d676efa6067c6d0f6ba8249d06da',
      sortOrder: 20,
      component: { default: ea500d676efa6067c6d0f6ba8249d06da }
    }
  },
  footerLeft: {
    ea489c0bfc05217bc17d02192e0f5af03: {
      id: 'ea489c0bfc05217bc17d02192e0f5af03',
      sortOrder: 10,
      component: { default: ea489c0bfc05217bc17d02192e0f5af03 }
    },
    ec25e81e48153065d5d77fd2c72eea10d: {
      id: 'ec25e81e48153065d5d77fd2c72eea10d',
      sortOrder: 20,
      component: { default: ec25e81e48153065d5d77fd2c72eea10d }
    }
  },
  body: {
    e86c8ca197c0d4264062be2572d4efa51: {
      id: 'e86c8ca197c0d4264062be2572d4efa51',
      sortOrder: 10,
      component: { default: e86c8ca197c0d4264062be2572d4efa51 }
    },
    ecf7dabc19f03f918c01601d8dc51db01: {
      id: 'ecf7dabc19f03f918c01601d8dc51db01',
      sortOrder: 10,
      component: { default: ecf7dabc19f03f918c01601d8dc51db01 }
    }
  },
  head: {
    e635f14efd75d9409106d02fc94542bc3: {
      id: 'e635f14efd75d9409106d02fc94542bc3',
      sortOrder: 5,
      component: { default: e635f14efd75d9409106d02fc94542bc3 }
    }
  },
  adminNavigation: {
    e27497ed4cc85c2e8478675c21d44be7d: {
      id: 'e27497ed4cc85c2e8478675c21d44be7d',
      sortOrder: 10,
      component: { default: e27497ed4cc85c2e8478675c21d44be7d }
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