interface Props {
  setDeleteModal: any;
  deleteModal: boolean;
}
export default function DeleteMember(props: Props) {
  const { setDeleteModal, deleteModal } = props;

  return (
    <>
      {deleteModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-sticky outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-6 max-w-3xl md:min-w-120">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between px-5 py-5 border-blueGray-200 rounded-t">
                  <h3 className="text-xl font-semibold">
                    Are you sure you want to delete this member?
                  </h3>
                </div>
                {/*body*/}
                <div className="flex items-center justify-end px-6 py-1 border-blueGray-200 rounded-b">
                  <button
                    type="submit"
                    data-toggle="deleteModal"
                    data-target="#import"
                    className="inline-block px-8 py-2 m-1 mb-4 text-xs font-bold text-center text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer ease-soft-in leading-pro tracking-tight-soft bg-gradient-to-tl from-purple-700 to-pink-500 shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85"
                  >
                    Yes
                  </button>
                  <button
                    onClick={() => setDeleteModal(false)}
                    type="button"
                    data-toggle="deleteModal"
                    data-target="#import"
                    className="inline-block px-8 py-2 m-1 mb-4 text-xs font-bold text-center text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer ease-soft-in leading-pro tracking-tight-soft bg-gradient-to-tl from-slate-600 to-slate-300 shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85"
                  >
                    No
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
