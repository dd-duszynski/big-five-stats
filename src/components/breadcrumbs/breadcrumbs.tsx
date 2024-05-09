import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '../ui/breadcrumb';

interface BreadcrumbsProps {
  breadcrumbs: {
    link: string;
    text: string;
    showSeparator: boolean;
  }[];
}

export function Breadcrumbs({ breadcrumbs }: BreadcrumbsProps) {
  const breadcrumbItems = breadcrumbs.map((breadcrumb, index) => (
    <BreadcrumbItem key={index}>
      <BreadcrumbLink href={breadcrumb.link}>{breadcrumb.text}</BreadcrumbLink>
      {breadcrumb.showSeparator && <BreadcrumbSeparator />}
    </BreadcrumbItem>
  ));

  return (
    <Breadcrumb className="p-2">
      <BreadcrumbList>{breadcrumbItems}</BreadcrumbList>
    </Breadcrumb>
  );
}
