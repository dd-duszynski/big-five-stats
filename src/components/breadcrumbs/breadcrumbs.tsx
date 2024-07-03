import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '../ui/breadcrumb';

export type BreadcrumbsItemType = {
  link: string;
  showSeparator: boolean;
  text: string;
};

type BreadcrumbsProps = {
  breadcrumbs: BreadcrumbsItemType[];
  className?: string;
};

export function Breadcrumbs({ breadcrumbs, className = '' }: BreadcrumbsProps) {
  const breadcrumbItems = breadcrumbs.map((breadcrumb, index) => (
    <BreadcrumbItem key={index}>
      <BreadcrumbLink
        href={breadcrumb.link}
        className="hover:underline"
      >
        {breadcrumb.text}
      </BreadcrumbLink>
      {breadcrumb.showSeparator && <BreadcrumbSeparator />}
    </BreadcrumbItem>
  ));

  return (
    <Breadcrumb className={className}>
      <BreadcrumbList>{breadcrumbItems}</BreadcrumbList>
    </Breadcrumb>
  );
}
