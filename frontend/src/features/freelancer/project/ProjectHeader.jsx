import useCategories from "../../../hooks/useCategories"
import Filter from "../../../ui/Filter";
import FilterDropDown from "../../../ui/FilterDropDown"

const sortOptions = [
  {
    label: "Sort by newest",
    value: "latest"
  },
  {
    label: "Sort by oldest",
    value: "earliest"
  }
];

const statusOptions = [
  {
    label: "All",
    value: "ALL",
  },
  {
    label: "Open",
    value: "OPEN",
  },
  {
    label: "Close",
    value: "CLOSED",
  }
];

const ProjectHeader = () => {
  const { transformedCategories } = useCategories();
  return (
    <div className="flex items-center justify-between text-secondary-700 mb-8">
      <h1 className="text-lg font-bold">List Of Projects</h1>
      <div className="flex gap-x-8 items-center">
        <Filter filterField="status" options={statusOptions} />
        <FilterDropDown filterField="sort" options={sortOptions} />
        <FilterDropDown filterField="category" options={[{
          value: "ALL",
          label: "Category (All)"
        }, ...transformedCategories]} />
      </div>
    </div>
  )
}

export default ProjectHeader