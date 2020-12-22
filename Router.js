export class Router {
    orderStatusArr = [];

    getCurrentState(url) {

        let viewName = '';
        let endPointName = '';
        let hash = url.split('#')[1];
        let hashParts = hash.split('/');


        switch (hashParts[0]) {
            case  'games':
                viewName = 'GameDescription';
                endPointName = hash;
                break;

            case '':{
            viewName = 'Category'
            }

            case  'catalogue':
                if (hashParts.length > 1) {
                    viewName = 'Category';
                    endPointName = 'categories/' + hashParts[1];
                }

                else {
                    viewName = 'Catalogue';
                    endPointName = 'categories';
                }
                break;
            case 'order':
                if (hashParts.length>1)
                    viewName="fuck";

                else{
                    viewName = "CheckoutForm";
                    endPointName = 'categories';
                }

                break;
            default:
                window.location.hash = '';
                break;
        }

        return {
            viewName,
            endPointName
        };
    }


}