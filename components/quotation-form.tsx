"use client";

import { useState } from "react";

export function QuotationForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="mx-auto max-w-5xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
      <h2 className="font-display text-3xl font-semibold text-brand-navy">
        Quotation Request Form
      </h2>
      <p className="mt-3 text-slate-600">
        Please provide as much detail as possible so we can develop an accurate
        response.
      </p>
      <form
        className="mt-8 space-y-6"
        onSubmit={(event) => {
          event.preventDefault();
          setSubmitted(true);
        }}
      >
        <div className="grid gap-5 md:grid-cols-2">
          <input
            className="rounded-2xl border border-slate-200 px-4 py-3 outline-none"
            placeholder="Full Name"
          />
          <input
            className="rounded-2xl border border-slate-200 px-4 py-3 outline-none"
            placeholder="Company"
          />
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <input
            className="rounded-2xl border border-slate-200 px-4 py-3 outline-none"
            placeholder="Email"
          />
          <input
            className="rounded-2xl border border-slate-200 px-4 py-3 outline-none"
            placeholder="Phone"
          />
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <input
            className="rounded-2xl border border-slate-200 px-4 py-3 outline-none"
            placeholder="Project Location"
          />
          <input
            className="rounded-2xl border border-slate-200 px-4 py-3 outline-none"
            placeholder="Service Required"
          />
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <input
            className="rounded-2xl border border-slate-200 px-4 py-3 outline-none"
            placeholder="Product Category"
          />
          <input
            className="rounded-2xl border border-slate-200 px-4 py-3 outline-none"
            placeholder="Estimated Budget"
          />
        </div>
        <textarea
          className="min-h-40 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none"
          placeholder="Project Description"
        ></textarea>
        <input
          className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none"
          placeholder="Preferred Timeline"
        />
        <div className="grid gap-5 md:grid-cols-3">
          <label className="rounded-2xl border border-dashed border-slate-300 px-4 py-6 text-sm text-slate-600">
            Upload BOQ
          </label>
          <label className="rounded-2xl border border-dashed border-slate-300 px-4 py-6 text-sm text-slate-600">
            Upload Drawings
          </label>
          <label className="rounded-2xl border border-dashed border-slate-300 px-4 py-6 text-sm text-slate-600">
            Upload Specifications
          </label>
        </div>
        <button className="rounded-full bg-brand-orange px-6 py-3 font-semibold text-white transition hover:bg-brand-navy">
          Submit Request
        </button>
      </form>
      {submitted && (
        <div className="mt-8 rounded-2xl bg-brand-bg p-5 text-brand-navy">
          Thank you. Your quotation request has been received and our team will
          contact you shortly.
        </div>
      )}
    </div>
  );
}
