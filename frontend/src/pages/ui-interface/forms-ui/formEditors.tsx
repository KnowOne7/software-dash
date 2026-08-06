import React, { useState, useMemo } from 'react';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import CommonFooter from "../../../components/common-footer/commonFooter"
import { Link } from 'react-router';
import { all_routes } from '../../../routes/all_routes';

const FormEditors: React.FC = () => {
  const [snowContent, setSnowContent] = useState(`<h1><span class="ql-size-large">Hello World!</span></h1><p><br></p><h3>This is an simple editable area.</h3><p><br></p><ul><li>Select a text to reveal the toolbar.</li><li>Edit rich document on-the-fly, so elastic!</li></ul><p><br></p><p>End of simple area</p>`);

  const modules = useMemo(() => ({
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote', 'code-block'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],
      [{ 'indent': '-1'}, { 'indent': '+1' }],
      ['link', 'image'],
      ['clean']
    ],
  }), []);

 

  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper ui-modals relative pt-[50px] ml-[240px]">
        <div className="content p-5 pb-0">
          {/* Page Header */}
          <div className="mb-7">
            <h4 className="mb-1 text-xl font-bold flex items-center">Editors</h4>
            <nav aria-label="breadcrumb">
              <ol className="flex flex-wrap space-x-1 text-sm text-gray-500">
                <li>
                  <Link to={all_routes.dealsDashboard} className="hover:underline text-gray-700">
                    Home
                  </Link>
                  <span>
                    <i className="ti ti-chevron-right" />
                  </span>
                </li>
                <li>
                  <Link
                    to="#"
                    className="hover:underline text-gray-700"
                  >
                    Forms
                  </Link>
                  <span>
                    <i className="ti ti-chevron-right" />
                  </span>
                </li>
                <li className="text-dark font-medium" aria-current="page">
                  Editors
                </li>
              </ol>
            </nav>
          </div>
          {/* End Page Header */}
          
          {/* Snow Theme Editor */}
          <div className="card border bg-white border-borderColor mb-5 rounded">
            <div className="card-header border-b border-borderColor p-4">
              <h5 className="card-title">Quill Editor</h5>
            </div>
            <div className="card-body p-4">
              <p className="text-muted mb-4">
                Snow is a clean, flat toolbar theme.
              </p>
              <div className="snow-editor" style={{ height: 300, background: 'white' }}>
                <ReactQuill
                  theme="snow"
                  value={snowContent}
                  onChange={setSnowContent}
                  modules={modules}
                  style={{ height: '250px' }}
                />
              </div>
            </div>
          </div>
      
        </div>
        {/* Start Footer */}
        <CommonFooter/>
        {/* End Footer */}
      </div>
      {/* /Page Wrapper */}
    </>
  );
};

export default FormEditors;