import { useGlobalContext } from "./context";
import sublinks from "./data";

const Navlinks = () => {
    const { setPageId } = useGlobalContext();
    return (
        <div className="nav-links">
            {sublinks.map((item) => {
                const { pageId, page } = item;
                return (
                    <button
                        key={pageId}
                        className="nav-link"
                        onMouseOver={() => setPageId(pageId)}
                    >
                        {page}
                    </button>
                );
            })}
        </div>
    );
};

export default Navlinks;
