import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '../ui/breadcrumb';

export interface BreadcrumbsItem {
  link: string;
  showSeparator: boolean;
  text: string;
}

interface BreadcrumbsProps {
  breadcrumbs: BreadcrumbsItem[];
  className?: string;
}

export function Breadcrumbs({ breadcrumbs, className = '' }: BreadcrumbsProps) {
  const breadcrumbItems = breadcrumbs.map((breadcrumb, index) => (
    <BreadcrumbItem key={index}>
      <BreadcrumbLink href={breadcrumb.link}>{breadcrumb.text}</BreadcrumbLink>
      {breadcrumb.showSeparator && <BreadcrumbSeparator />}
    </BreadcrumbItem>
  ));

  return (
    <Breadcrumb className={className}>
      <BreadcrumbList>{breadcrumbItems}</BreadcrumbList>
    </Breadcrumb>
  );
}
