
export class Router {
    getCurrentState() {
        let viewName = '';
        let endpointName = '';
        switch (window.location.hash.split('#')[1]) {
            case 'products':
                viewName = 'productsPage';
                endpointName = 'posts';
                break;
            default:
                break;
        }

        return {
            viewName,
            endpointName
        };
    }

    setState(viewName,endPointName){
        window.location.hash="/"+"#"+viewName;
}
}