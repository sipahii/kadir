
function PhpConfig(){
  return (
    <>
      <div className="card">
        <div className="card-header">
          <h3 className="h6 mb-0">php.ini Config</h3>
        </div>
        <div className="card-body">
          <table className="table table-striped aiz-table footable footable-2 breakpoint breakpoint-lg" style={{}}>
            <thead>
              <tr className="footable-header">
                <th className="footable-first-visible" style={{ display: 'table-cell' }}>Config Name</th><th data-breakpoints="lg" style={{ display: 'none' }}>Current</th><th data-breakpoints="lg" style={{ display: 'none' }}>Recommended</th><th className="footable-last-visible" style={{ display: 'table-cell' }}>Status</th></tr>
            </thead>
            <tbody>
              <tr data-expanded="true">
                <td className="footable-first-visible" style={{ display: 'table-cell' }}><span className="footable-toggle fooicon fooicon-minus" />file_uploads</td><td style={{ display: 'none' }} /><td style={{ display: 'none' }} /><td className="footable-last-visible" style={{ display: 'table-cell' }}>
                  <i className="las la-check text-success" />
                </td></tr><tr className="footable-detail-row"><td colSpan={2}><table className="footable-details table table-striped aiz-table"><tbody><tr><th>Current</th><td style={{ display: 'table-cell' }}>
                  On
                </td></tr><tr><th>Recommended</th><td style={{ display: 'table-cell' }}>On</td></tr></tbody></table></td></tr><tr>
                <td className="footable-first-visible" style={{ display: 'table-cell' }}><span className="footable-toggle fooicon fooicon-plus" />max_file_uploads</td><td style={{ display: 'none' }}>
                  20
                </td><td style={{ display: 'none' }}>20+</td><td className="footable-last-visible" style={{ display: 'table-cell' }}>
                  <i className="las la-check text-success" />
                </td></tr><tr>
                <td className="footable-first-visible" style={{ display: 'table-cell' }}><span className="footable-toggle fooicon fooicon-plus" />upload_max_filesize</td><td style={{ display: 'none' }}>
                  2M
                </td><td style={{ display: 'none' }}>128M+</td><td className="footable-last-visible" style={{ display: 'table-cell' }}>
                  <i className="las la-times text-danger" />
                </td></tr><tr>
                <td className="footable-first-visible" style={{ display: 'table-cell' }}><span className="footable-toggle fooicon fooicon-plus" />post_max_size</td><td style={{ display: 'none' }}>
                  8M
                </td><td style={{ display: 'none' }}>128M+</td><td className="footable-last-visible" style={{ display: 'table-cell' }}>
                  <i className="las la-times text-danger" />
                </td></tr><tr>
                <td className="footable-first-visible" style={{ display: 'table-cell' }}><span className="footable-toggle fooicon fooicon-plus" />allow_url_fopen</td><td style={{ display: 'none' }}>
                  On
                </td><td style={{ display: 'none' }}>On</td><td className="footable-last-visible" style={{ display: 'table-cell' }}>
                  <i className="las la-check text-success" />
                </td></tr><tr>
                <td className="footable-first-visible" style={{ display: 'table-cell' }}><span className="footable-toggle fooicon fooicon-plus" />max_execution_time</td><td style={{ display: 'none' }}>
                  30
                </td><td style={{ display: 'none' }}>600+</td><td className="footable-last-visible" style={{ display: 'table-cell' }}>
                  <i className="las la-times text-danger" />
                </td></tr><tr>
                <td className="footable-first-visible" style={{ display: 'table-cell' }}><span className="footable-toggle fooicon fooicon-plus" />max_input_time</td><td style={{ display: 'none' }}>
                  60
                </td><td style={{ display: 'none' }}>120+</td><td className="footable-last-visible" style={{ display: 'table-cell' }}>
                  <i className="las la-times text-danger" />
                </td></tr><tr>
                <td className="footable-first-visible" style={{ display: 'table-cell' }}><span className="footable-toggle fooicon fooicon-plus" />max_input_vars</td><td style={{ display: 'none' }}>
                  1000
                </td><td style={{ display: 'none' }}>1000+</td><td className="footable-last-visible" style={{ display: 'table-cell' }}>
                  <i className="las la-check text-success" />
                </td></tr><tr>
                <td className="footable-first-visible" style={{ display: 'table-cell' }}><span className="footable-toggle fooicon fooicon-plus" />memory_limit</td><td style={{ display: 'none' }}>
                  128M
                </td><td style={{ display: 'none' }}>256M+</td><td className="footable-last-visible" style={{ display: 'table-cell' }}>
                  <i className="las la-times text-danger" />
                </td></tr></tbody>
          </table>
        </div>
      </div>
    </>
  )
}
export default PhpConfig;