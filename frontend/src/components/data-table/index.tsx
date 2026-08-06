import React, { useEffect, useState, useRef } from "react";
import { Pagination, Select, Table } from "antd";
import type { DatatableProps } from "../../core/data/interface";
import { useDataTableFlowbite } from "../../hooks/useDynamicFlowbite";

const { Option } = Select;

const Datatable: React.FC<DatatableProps> = ({
  columns,
  dataSource,
  Selection,
  searchText,
}) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<any[]>([]);
  const [Selections, setSelections] = useState<any>(true);
  const [filteredDataSource, setFilteredDataSource] = useState(dataSource);
  const [pageSize, setPageSize] = useState(10);
  const [current, setCurrent] = useState(1);
  
  // Initialize Flowbite for dynamic content
  const { handleDynamicContent } = useDataTableFlowbite();

  // Debounce search
  const [debouncedSearchText, setDebouncedSearchText] = useState(searchText);
  const debounceTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (debounceTimeout.current) clearTimeout(debounceTimeout.current);
    debounceTimeout.current = setTimeout(() => {
      setDebouncedSearchText(searchText);
    }, 300);
    return () => {
      if (debounceTimeout.current) clearTimeout(debounceTimeout.current);
    };
  }, [searchText]);

  useEffect(() => {
    setSelections(Selection);
  }, [Selection]);

  useEffect(() => {
    const filteredData = dataSource.filter((record) =>
      Object.values(record).some((field) =>
        String(field).toLowerCase().includes(debouncedSearchText.toLowerCase())
      )
    );
    setFilteredDataSource(filteredData);
    setCurrent(1); // reset on search
    
    // Reinitialize Flowbite after data changes to ensure dynamic content works
    handleDynamicContent();
  }, [debouncedSearchText, dataSource, handleDynamicContent]);

  const onSelectChange = (newSelectedRowKeys: any[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const handlePageChange = (page: number, pageSize: number) => {
    setCurrent(page);
    setPageSize(pageSize);
    
    // Reinitialize Flowbite after pagination changes
    handleDynamicContent();
  };

  return (
    <div className="mb-3">
      {/* Table */}
      <Table
        className="table table-nowrap dataTable min-w-full text-sm align-middle whitespace-nowrap"
        rowSelection={Selections ? rowSelection : undefined}
        columns={columns}
        rowHoverable={false}
        dataSource={filteredDataSource.slice(
          (current - 1) * pageSize,
          current * pageSize
        )}
        pagination={false} // disable built-in pagination
      />

      {/* Pagination Footer */}
      <div className="flex flex-col md:flex-row items-center justify-between mt-3">
        {/* Left: Show entries */}
        <div className="w-full md:w-1/2">
          <div className="datatable-length">
            <label>
              Show
              <Select
                value={pageSize}
                onChange={(value) => handlePageChange(1, value)} // reset to page 1
                style={{ width: 70, margin: "0 8px" }}
                size="small"
              >
                <Option value={10}>10</Option>
                <Option value={25}>25</Option>
                <Option value={50}>50</Option>
                <Option value={100}>100</Option>
              </Select>
              entries
            </label>
          </div>
        </div>

        {/* Right: Pagination */}
        <div className="w-full md:w-1/2 mt-4 md:mt-0 text-end">
          <div className="datatable-paginate inline-block">
            <Pagination
              current={current}
              pageSize={pageSize}
              total={filteredDataSource.length}
              onChange={handlePageChange}
              size="small"
              showSizeChanger={false}
              itemRender={(_page, type, originalElement) => {
                if (type === "prev") {
                  return (
                    <a>
                      <i className="ti ti-chevron-left" />
                    </a>
                  );
                }
                if (type === "next") {
                  return (
                    <a>
                      <i className="ti ti-chevron-right" />
                    </a>
                  );
                }
                return originalElement;
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Datatable;
