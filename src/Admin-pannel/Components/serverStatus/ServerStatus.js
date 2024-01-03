import ExtensionsInformation from "./ExtensionsInformation/ExtensionsInformation";
import FileSystem from "./fileSystem/FileSystem";
import PhpConfig from "./phpConfig/PhpConfig";
import ServerInformation from "./serverInformation/ServerInformation";

function ServerStatus() {
  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="row">
            <div className="col-lg-10 col-xxl-8 mx-auto">
              <ServerInformation />
              <PhpConfig />
              <ExtensionsInformation />
              <FileSystem />
            </div>
          </div>
        </div>
        <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto"></div>
      </div>

    </>
  )
}
export default ServerStatus;