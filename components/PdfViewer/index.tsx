import clsx from "clsx";

import React, { Fragment, useState } from "react";

import { motion } from "framer-motion";
import { ArrowLeft, Loader2, ZoomInIcon, ZoomOutIcon } from "lucide-react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { Document, Page, pdfjs } from "react-pdf";
import { Button } from "../ui/button";
import classes from "./styles.module.scss";

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
// Set the worker source manually
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.8.69/pdf.worker.min.js`;

interface Props {
  url: string;
}

const PdfViewer: React.FC<Props> = ({ url }) => {
  const [numPages] = React.useState(0);
  const [pageNumber, setPageNumber] = React.useState(1);
  const [pageZoom, setPageZoom] = React.useState(1); //setting 1 to show fisrt page
  // const [_loadSuccess, setLoadSuccess] = React.useState<boolean>(false);
  const [openSidepanel, setOpenSidePanel] = useState(true);

  // function onDocumentLoadSuccess(result: any) {
  //   setNumPages(result.numPages);
  //   // setLoadSuccess(true);
  // }

  const loadingCom = (
    <div
      className="flex align-items-center justify-content-center"
      style={{ width: "100%", height: "450px" }}
    >
      <div className="flex align-items-center justify-content-center">
        <Loader2 className="animate-spin" />
        <h4>Processing...please wait</h4>
      </div>
    </div>
  );

  return (
    <Fragment>
      <Document
        file={url}
        // onLoadSuccess={onDocumentLoadSuccess}
        loading={loadingCom}
        className={classes.pdf_container}
        onLoadError={(err) => console.log("Load error", err)}
        onSourceError={(err) => console.log("Source error", err)}
      >
        <div className={clsx(classes.pdf_root)}>
          <motion.div
            className={clsx(classes.pdf_pages)}
            animate={{ x: openSidepanel ? 0 : -300 }}
          >
            <div className="relative">
              <Button
                className={classes.arrow_btn}
                onClick={() => setOpenSidePanel((prev) => !prev)}
              >
                <ArrowLeft />
              </Button>
              <div
                className={clsx(
                  "flex flex-column gap-2",
                  classes.page_scroll_body,
                  "div__scroll"
                )}
              >
                {[...new Array(numPages)].map((_, num) => (
                  <div key={`page_${num + 1}`}>
                    <Page
                      pageNumber={num + 1}
                      scale={0.3}
                      className={classes.left_page_item}
                      onClick={() => setPageNumber(num + 1)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div
            className={classes.pdf_renderer}
            animate={{ paddingLeft: openSidepanel ? 300 : 0 }}
          >
            <div className={classes.pdf__options}>
              <div className="flex align-items-center justify-content-center">
                <div className={classes.options_btn}>
                  <>
                    <Button
                      className={clsx("mr-2", classes.btnStyle)}
                      onClick={() => setPageZoom(pageZoom - 0.2)}
                    >
                      <ZoomOutIcon />
                    </Button>
                    <Button
                      onClick={() => setPageZoom(pageZoom + 0.2)}
                      className={clsx(classes.btnStyle)}
                    >
                      <ZoomInIcon />
                    </Button>
                    <Button
                      className={clsx("mr-2 ml-4", classes.btnStyle)}
                      onClick={() => setPageNumber(pageNumber - 1)}
                      disabled={pageNumber === 1}
                    >
                      <FaAngleLeft />
                    </Button>
                    <Button
                      onClick={() => setPageNumber(pageNumber + 1)}
                      disabled={pageNumber === numPages}
                      className={classes.btnStyle}
                    >
                      <FaAngleRight />
                    </Button>
                  </>
                  <div>
                    <p style={{ fontSize: 12, marginTop: 8 }}>
                      Page {pageNumber} of {numPages}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Page pageNumber={pageNumber} scale={pageZoom} />
          </motion.div>
        </div>
      </Document>
    </Fragment>
  );
};

export default PdfViewer;

//https://simplitaughts-books.s3.us-east-2.amazonaws.com/1734369961887.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVWXDRQ7H3BFBBMFA%2F20241219%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20241219T184656Z&X-Amz-Expires=3600&X-Amz-Signature=ba36d1a7dab17f330cc2e894e2d853c76ee3bfa53b96d3a1a1c6da9b79a4fde8&X-Amz-SignedHeaders=host&response-content-disposition=inline&response-content-type=application%2Fpdf
//https://simplitaughts-books.s3.us-east-2.amazonaws.com/1734369961887.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVWXDRQ7H3BFBBMFA%2F20241220%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20241220T062148Z&X-Amz-Expires=3600&X-Amz-Signature=4d730dfba24ed0f4382d10fad4fc1ba74b32fa572db6286722b034f642229ed8&X-Amz-SignedHeaders=host&response-content-disposition=inline&response-content-type=application%2Fpdf
