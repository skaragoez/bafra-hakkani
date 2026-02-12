import StructuredData from "@/components/StructuredData";

export default function EtkinliklerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData type="event" />
      {children}
    </>
  );
}
