function CategoryDropDown() {

    function CategoryItem({ title }) {
        return (
            <p className="hover:bg-white duration-100 pl-4 hover:text-gray-900 text-gray-300 font-sans text-sm font-semibold pt-1">
                {title}
            </p>
        );
    }
    const categories = [
        ["Drama & Sports", "Films", "Comedy", "Documentary"],
        ["Sports", "News", "Entertainment", "Music"],
        ["Food", "Lifestyle", "History", "Science & Nature"],
        ["Arts", "From the Archive", "From the Archive", "Signed"],
        ["Northern Ireland", "Schooland", "Wales"],
        ["CBeebies", "CBBC"]
    ];
    return (
        <div className="h-[22vh] px-12 py-3 bg-[#161618] w-full text-white flex gap-28">
            <div className="w-full h-full grid grid-cols-6">
                {categories.map((category, index) => (
                    <div className="grid" key={index}>
                        {category.map((item, i) => (
                            <CategoryItem key={i} title={item} />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CategoryDropDown
