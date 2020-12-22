export class Router {
    orderStatusArr = [];

    getCurrentState(url) {

        let viewName = '';
        let endPointName = '';
        let hash = url.split('#')[1];
        let hashParts;

        if(hash!==undefined) hashParts = hash.split('/');
         else hashParts =[''];

        switch (hashParts[0]) {
            case  'games':
                viewName = 'GameDescription';
                endPointName = hash;
                break;

            case  'catalogue':
                if (hashParts.length > 1) {
                    viewName = 'Category';
                    endPointName = 'categories/catalogue' + hashParts[1];
                } else {
                    viewName = 'Catalogue';
                    endPointName = 'categories/catalogue';
                }
                break;

            case 'cart':

                if(JSON.parse(localStorage.getItem("cart"))==null){
                    viewName = 'Catalogue';
                    endPointName = 'categories/catalogue';
                }

                else{
                viewName = 'CartTemplate';
                endPointName = 'games';
                }

                break;

            case 'order':
                if (hashParts.length > 1)
                    viewName = "fuck";

                else {
                    viewName = "CheckoutForm";
                    endPointName = 'categories/catalogue';
                }

                break;
            default:
                viewName = 'Category'
                endPointName = 'categories/Best price';
                break;
        }

        return {
            viewName,
            endPointName
        };
    }


}