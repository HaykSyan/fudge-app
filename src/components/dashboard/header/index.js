import { lazy, memo, useEffect } from "react";
import { connect } from "react-redux";
import { getUser } from "../../../store/actions/user";

const UserSection = lazy(() => import('./user-section'));
const ActionsSection = lazy(() => import('./actions-section'));
const HeaderTitle = lazy(() => import('./title'));

const DashboardHeader = ({user, getUser}) => {
    useEffect(()=> {
        getUser();
    }, []);
    
    return (
        <header className="__header d-flex flex-column w-100">
            <div className="d-flex align-items-center justify-content-space-between w-100">
                <UserSection user={user} />
                <ActionsSection />
            </div>
            <HeaderTitle />
        </header>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.user.user,
    }
}

const mapDispatchToProps = (dispatch) => ({
    getUser: () => dispatch(getUser())
})

export default memo(connect(mapStateToProps, mapDispatchToProps)(DashboardHeader));
