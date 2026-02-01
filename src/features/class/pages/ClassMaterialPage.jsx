import { useParams } from 'react-router-dom';
import { useClassDetail } from '../hooks/useClassDetail';
import Sidebar from '../components/Sidebar';
import Breadcrumb from '../../../shared/components/ui/Breadcrumb';
import SearchBar from '../components/SearchBar';
import HeroBanner from '../components/HeroBanner';
import TabNavigation from '../components/TabNavigation';
import MaterialFolderCard from '../components/MaterialFolderCard';
import MaterialFileRow from '../components/MaterialFileRow';
import MaterialsToolbar from '../components/MaterialsToolbar';
import { materialData } from '../data/classMaterial.data';

export default function ClassMaterialPage() {
  const { id } = useParams();
  const { user, classInfo, breadcrumbs, tabs, navigation } = useClassDetail(id);
  const { folders, recentFiles } = materialData;

  return (
    <div className="bg-background-light font-display text-slate-900 min-h-screen flex overflow-x-hidden transition-colors duration-300">
      <Sidebar user={user} navigation={navigation} />
      
      <main className="flex-1 flex flex-col pl-32 pr-6 md:pr-10 py-6 min-w-0 transition-all duration-300">
        <header className="flex items-center justify-between mb-8 gap-4">
          <Breadcrumb items={breadcrumbs} />
          <SearchBar placeholder="Search in this class..." />
          <button className="md:hidden p-2 text-slate-600">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </header>

        <HeroBanner
          classCode={classInfo.code}
          classStatus={classInfo.status}
          className={classInfo.name}
          description={classInfo.description}
          backgroundImage={classInfo.backgroundImage}
        />

        <TabNavigation tabs={tabs} />

        <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm min-h-[600px] overflow-hidden flex flex-col mb-10">
          <div className="p-6 md:p-8 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h2 className="text-2xl font-bold text-slate-900">Course Materials</h2>
            <MaterialsToolbar />
          </div>

          <div className="p-6 md:p-8 flex-1">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Folders</h3>
              <div className="flex gap-2">
                <button className="text-primary transition-colors">
                  <span className="material-symbols-outlined">grid_view</span>
                </button>
                <button className="text-slate-300 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">list</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {folders.map((folder) => (
                <MaterialFolderCard key={folder.id} folder={folder} />
              ))}
            </div>

            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Recent Files</h3>
            <div className="overflow-x-auto rounded-xl border border-slate-100">
              <table className="w-full text-left border-collapse">
                <thead className="bg-slate-50">
                  <tr className="text-xs font-bold text-slate-500 uppercase">
                    <th className="py-4 pl-6 font-bold w-1/2">Name</th>
                    <th className="py-4 font-bold">Date Added</th>
                    <th className="py-4 font-bold">Size</th>
                    <th className="py-4 pr-6 text-right"></th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {recentFiles.map((file) => (
                    <MaterialFileRow key={file.id} file={file} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
