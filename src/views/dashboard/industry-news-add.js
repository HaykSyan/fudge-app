import { lazy, memo } from "react"

const AddNewsForm = lazy(() => import('../../components/dashboard/form/add-news/'));

const AddIndustryNews = () => {
    return (
        <div className="__add_news">
            <AddNewsForm />
        </div>
    );
}

export default memo(AddIndustryNews);
