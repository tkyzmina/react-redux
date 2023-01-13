import { Badge } from "UI/Badge";
import { Card } from "UI/Card";
import { Stack } from "UI/Stack";

import { useSelector, useDispatch } from "react-redux";
import { selectAllFilters } from "../store/filters/filter-selector";
import { clearFilter, removeFilter } from "../store/filters/filters-actions";

const FilterPanel = () => {
  const filtes = useSelector(selectAllFilters);
  const dispatch = useDispatch();

  if (filtes.length === 0) {
    return null;
  }

  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {filtes.map((filter) => {
            return (
              <Badge
                variant="clearable"
                onClear={() => dispatch(removeFilter(filter))}
                key={filter}
              >
                {filter}
              </Badge>
            );
          })}
        </Stack>

        <button className="link" onClick={() => dispatch(clearFilter())}>
          Clear
        </button>
      </div>
    </Card>
  );
};

export { FilterPanel };
