import SCIMView from "@enterprise/components/scim/scimView";

export default function SCIMPage() {
	return (
		<div className="no-padding-parent flex flex-col w-full h-[calc(100dvh-1rem)]">
			<div className="mx-auto w-full max-w-3xl grow px-4">
				<SCIMView />
			</div>
		</div>
	);
}