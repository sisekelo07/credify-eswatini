import { applicationSteps, documents, images, packages } from "@/lib/content";
import { PageHero } from "@/components/PageHero";
import { SelectField, TextArea, TextField } from "@/components/FormFields";

export const metadata = { title: "Apply Online" };

export default function ApplyPage() {
  return (
    <main>
      <PageHero title="Apply to Join Credify" eyebrow="Online registration" body="A multi-step application preview for personal details, property goals, package selection, documents and payment configuration." image={images.applyHero} />
      <section className="section">
        <div className="application-steps">{applicationSteps.map((step, index) => <div key={step}>{String(index + 1).padStart(2, "0")} {step}</div>)}</div>
        <form className="form-card form-grid">
          <TextField label="Full Name" />
          <TextField label="Date of Birth" type="date" />
          <TextField label="ID Number" />
          <TextField label="Phone" />
          <TextField label="Email" type="email" />
          <TextArea label="Residential Address" />
          <SelectField label="Employment Status" options={["Employed", "Self-employed", "Student", "Other"]} />
          <TextField label="Employer" />
          <SelectField label="Property Goal" options={["Buy a Home", "Build a Home", "Renovate / Improve Home"]} />
          <SelectField label="Package" options={packages.map((plan) => plan.title)} />
          <div className="field full"><span>Upload Documents</span><div className="card">{documents.map((doc) => <p key={doc}>{doc}: upload control ready for backend integration</p>)}</div></div>
          <div className="field full"><span>Payment</span><div className="card"><p>Payment UI is ready. Official payment gateway, joining fee and bank details must be configured by Credify.</p></div></div>
          <button className="btn btn-primary" type="button">Submit Application Preview</button>
        </form>
      </section>
    </main>
  );
}
