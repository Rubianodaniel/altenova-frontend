import FullWirdthLayout from "hocs/layaouts/FullWirdthLayout";
import { connect } from "react-redux";
function Home(){
    return(
        <FullWirdthLayout>
            Home           
        </FullWirdthLayout>
    )
}

const mapStateToProps = state =>({

})

export default connect (mapStateToProps,{

})(Home)