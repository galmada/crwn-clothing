import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import WithSpinner from '../../components/with-spinner/with-spinner.component'

import  CollectionsOverview  from '../../components/collections-overview/collections-overview.component'

import CollectionPage from '../category/collection.component'
import { updateCollections } from '../../redux/shop/shop.actions';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectoinPageWithSpinner = WithSpinner(CollectionPage);




class ShopPage extends React.Component {
    state = {
        loading: true
    };
    
    unsuscribeFromSnapshot = null;

    componentDidMount(){
        const {updateCollections } = this.props;

        const collectionRef = firestore.collection('collections');
        
        collectionRef.get().then(snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState ({ loading: false});
        })

        // collectionRef.onSnapshot(async snapshot => {
        //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        //     updateCollections(collectionsMap);
        //     this.setState ({ loading: false});
        // })

    }

    render(){
        const { match} = this.props
        const { loading} = this.state;
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props} /> }/>
                <Route path={`${match.path}/:collectionId`} render={(props) => <CollectoinPageWithSpinner isLoading={loading} {...props} /> }/>
            </div>
        );

    }

    
    componentWillUnmount(){
    
    }

}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});

export default connect(null,mapDispatchToProps)(ShopPage);