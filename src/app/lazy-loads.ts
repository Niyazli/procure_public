export const loadHomepage = () => import('./modules/homepage/homepage.module').then(m => m.HomepageModule);
export const loadAuth = () => import('./modules/auth/auth.module').then(m => m.AuthModule);
export const loadEvent = () => import('./modules/document/document.module').then(m => m.DocumentModule);
export const loadCompany = () => import('./modules/company/company.module').then(m => m.CompanyModule);
export const loadProduct = () => import('./modules/product/product.module').then(m => m.ProductModule);
