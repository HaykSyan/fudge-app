import { memo } from "react"
import { Link } from "react-router-dom";

const AdditionalInfoSection = () => (
    <div className="text-center _info p-5">
        <h1>All your finances in one place.</h1>
        <p>Find out how our team of highly qualified financial consultants can help <br/> you achieve your financial goals.</p>

        <Link to="/dashboard/" className="btn btn-outline-light">View Dashboard</Link>
    </div>
)

export default memo(AdditionalInfoSection);