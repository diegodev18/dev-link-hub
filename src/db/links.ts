import HomeIcon from "@/components/icons/homeIcon.astro";
import WorkIcon from "@/components/icons/workIcon.astro";
import ProgrammingIcon from "@/components/icons/programmingIcon.astro";
import BlogIcon from "@/components/icons/blogIcon.astro";

export const pages_link = [
  { title: "Home", icon: HomeIcon, path: "/" },
  { title: "Projects", icon: ProgrammingIcon, path: "/projects" },
  { title: "Works", icon: WorkIcon, path: "/works" },
  { title: "Blog", icon: BlogIcon, path: "/blog" },
];
