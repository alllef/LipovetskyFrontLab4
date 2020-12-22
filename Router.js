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
                    endPointName = 'categories/' + hashParts[1];
                } else {
                    viewName = 'Catalogue';
                    endPointName = 'categories';
                }
                break;
            case 'cart':

                if(localStorage.getItem("cart")===null){
                    viewName = 'Catalogue';
                    endPointName = 'categories';
                }

                else{
                    viewName = 'CartTemplate';
                    endPointName= 'posts';
                }

                break;

            case 'order':

                if(localStorage.getItem("cart")===null){
                    viewName = 'Catalogue';
                    endPointName = 'categories';
                }

                else {

                    viewName = "CheckoutForm";
                    endPointName = 'categories';
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