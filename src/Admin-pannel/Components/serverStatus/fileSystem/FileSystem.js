
function FileSystem(){
  return (
    <>
      <div className="card">
        <div className="card-header">
          <h3 className="h6 mb-0">Filesystem Permissions</h3>
        </div>
        <div className="card-body">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>File or Folder</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>.env</td>
                <td>
                  <i className="las la-check text-success" />
                </td>
              </tr>
              <tr>
                <td>public</td>
                <td>
                  <i className="las la-check text-success" />
                </td>
              </tr>
              <tr>
                <td>app/Providers</td>
                <td>
                  <i className="las la-check text-success" />
                </td>
              </tr>
              <tr>
                <td>app/Http/Controllers</td>
                <td>
                  <i className="las la-check text-success" />
                </td>
              </tr>
              <tr>
                <td>storage</td>
                <td>
                  <i className="las la-check text-success" />
                </td>
              </tr>
              <tr>
                <td>resources/views</td>
                <td>
                  <i className="las la-check text-success" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
export default FileSystem;