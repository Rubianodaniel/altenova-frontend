import { connect } from "react-redux"

import NavBar from "components/navigations/Navbar"
import Footer from "components/navigations/Footer"

const FullWidthLayouth = ({ children }) => {
    return (
        <>
            <NavBar />
            {children}
            <Footer/>
        </>
    )
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {

})(FullWidthLayouth)