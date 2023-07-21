import httpInstance from "@/utils/http";

export function getHomeCategoryAPI() {
  return httpInstance({
    url: "home/category/head",
  });
}
