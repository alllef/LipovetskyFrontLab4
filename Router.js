export class Router {
    getCurrentState(url) {
        let viewName = '';
        let endPointName = '';
        let hash = url.split('#')[1];
        console.log(hash);
        let hashParts = hash.split('/');
        console.log((hashParts[0] === 'catalogue' && hashParts.length === 1));
        switch (hashParts[0]) {
            case  'games':
                viewName = 'GameDescription';
                endPointName = hash;
                break;
            case  'catalogue':
                if(hashParts.length>1) {
                    viewName = 'Category';
                    endPointName = 'categories/' + hashParts[1];
                }

                else{
                    viewName = 'Catalogue';
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