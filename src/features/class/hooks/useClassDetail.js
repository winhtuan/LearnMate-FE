import { 
  userData, 
  classDataMap,
  breadcrumbItems, 
  tabItems, 
  tasksData, 
  assignmentsData, 
  assignmentFilters, 
  instructorData, 
  resourcesData, 
  navigationItems 
} from '../data/classDetail.data';

export function useClassDetail(classId) {
  const classInfo = classDataMap[classId] || classDataMap[1];
  
  return {
    user: userData,
    classInfo: classInfo,
    breadcrumbs: [
      { label: "Classes", href: "/classes", active: false },
      { label: "Current Term", href: "#", active: false },
      { label: classInfo.name, href: "#", active: true }
    ],
    tabs: tabItems,
    tasks: tasksData,
    assignments: assignmentsData,
    filters: assignmentFilters,
    instructor: instructorData,
    resources: resourcesData,
    navigation: navigationItems,
    loading: false,
    error: null
  };
}
