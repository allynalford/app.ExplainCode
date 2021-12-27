// React Basic and Bootstrap
import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody} from 'reactstrap';


//Import components
import PageBreadcrumb from "../../../components/Shared/PageBreadcrumb";

class PageTerms extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pathItems : [
                //id must required
                { id : 1, name : "Explain Code App", link : "/" },
                { id : 2, name : "Terms of Service", link : "/terms-of-service" },
            ],
            col1: true,
			col2: false,
			col3: false,
            col4: false,
            col5: false,
        }
        this.t_col1 = this.t_col1.bind(this);
		this.t_col2 = this.t_col2.bind(this);
		this.t_col3 = this.t_col3.bind(this);
        this.t_col4 = this.t_col4.bind(this);
        this.t_col5 = this.t_col5.bind(this);
    }

    t_col1() {
		this.setState({ col1: !this.state.col1, col2 : false, col3 : false, col4 : false, col5 : false });
	}
	t_col2() {
		this.setState({ col2: !this.state.col2, col1 : false, col3 : false, col4 : false, col5 : false });
	}
	t_col3() {
		this.setState({ col3: !this.state.col3, col2 : false, col1 : false, col4 : false, col5 : false });
	}
	t_col4() {
		this.setState({ col4: !this.state.col4, col2 : false, col3 : false, col1 : false, col5 : false });
    }
    t_col5() {
		this.setState({ col5: !this.state.col5, col2 : false, col3 : false, col1 : false, col4 : false });
    }

    componentDidMount() {
        document.title = "Tenably Labs - Terms of Service";
        window.addEventListener("scroll", this.scrollNavigation, true);
    }
    
     // Make sure to remove the DOM listener when the component is unmounted.
     componentWillUnmount() {
        window.removeEventListener("scroll", this.scrollNavigation, true);
     }

    scrollNavigation = () => {
        var doc = document.documentElement;
        var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        if (top > 80) {
            document.getElementById('topnav').classList.add('nav-sticky');
        }
        else {
            document.getElementById('topnav').classList.remove('nav-sticky');
        }
    }

    render() {

        return (
            <React.Fragment>
                {/* breadcrumb */}
                <PageBreadcrumb title="Terms of Services and Conditions" pathItems = {this.state.pathItems} />
                    <div className="position-relative">
                        <div className="shape overflow-hidden text-white">
                            <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                            </svg>
                        </div>
                    </div>

                <section className="section" id="maincontent">
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg={9}>
                                <Card className="shadow border-0 rounded">
                                    <CardBody>
                                        <h2 className="card-title">TENABLY LABS SERVICES AGREEMENT:</h2>
                                        <p className="text">It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text.</p>

                                        <h3 className="card-title"><b>1</b> SAAS SERVICES AND SUPPORT:</h3>
                                        <p className="text"><b>1.1</b> Subject to the terms
                                        of this Agreement, Company will use commercially reasonable
                                        efforts to provide Customer the Services. As part of the
                                        registration process, Customer will identify an administrative
                                        user name and password for Customer’s Company account.
                                        Company reserves the right to refuse registration of, or cancel
                                        passwords it deems inappropriate.</p>

                                        <p className="text"><b>1.2</b> Subject to the terms
                                        hereof, Company will provide Customer with reasonable
                                        technical support services in accordance with Company standard
                                        practices.</p>
                                        
                                        <h3 className="card-title"><b>2.</b>RESTRICTIONS AND RESPONSIBILITIES:</h3>
                                        <p className="text"><b>2.1</b> Customer will not,
                                        directly or indirectly: reverse engineer, decompile, disassemble
                                        or otherwise attempt to discover the source code, object code or
                                        underlying structure, ideas, know-how or algorithms relevant to
                                        the Services or any software, documentation or data related to the
                                        Services (“Software”); modify, translate, or create derivative
                                        works based on the Services or any Software (except to the
                                        extent expressly permitted by Company or authorized within the
                                        Services); use the Services or any Software for time sharing or
                                        service bureau purposes or otherwise for the benefit of a third; or
                                        remove any proprietary notices or labels.</p>

                                        <p className="text"><b>2.2</b> Further, Customer
                                        may not remove or export from the United States or allow the
                                        export or re-export of the Services, Software or anything related
                                        thereto, or any direct product thereof in violation of any
                                        restrictions, laws or regulations of the United States Department
                                        of Commerce, the United States Department of Treasury Office
                                        of Foreign Assets Control, or any other United States or foreign
                                        agency or authority. As defined in FAR section 2.101, the
                                        Software and documentation are “commercial items” and
                                        according to DFAR section 252.2277014(a)(1) and (5) are
                                        deemed to be “commercial computer software” and “commercial
                                        computer software documentation.” Consistent with DFAR
                                        section 227.7202 and FAR section 12.212, any use modification,
                                        reproduction, release, performance, display, or disclosure of such
                                        commercial software or commercial software documentation by
                                        the U.S. Government will be governed solely by the terms of this
                                        Agreement and will be prohibited except to the extent expressly
                                        permitted by the terms of this Agreement.</p>

                                        <p className="text"><b>2.3</b> Customer
                                        represents, covenants, and warrants that Customer will use the
                                        Services only in compliance with Company’s standard published
                                        policies then in effect (the “Policy”) and all applicable laws and
                                        regulations. Customer hereby agrees to indemnify and hold
                                        harmless Company against any damages, losses, liabilities,
                                        settlements and expenses (including without limitation costs and attorneys’ fees) 
                                        in connection with any claim or action that arises
                                        from an alleged violation of the foregoing or otherwise from
                                        Customer’s use of Services. Although Company has no
                                        obligation to monitor Customer’s use of the Services, Company
                                        may do so and may prohibit any use of the Services it believes
                                        may be (or alleged to be) in violation of the foregoing.</p>

                                        <p className="text"><b>2.4</b> Customer shall be
                                        responsible for obtaining and maintaining any equipment and
                                        ancillary services needed to connect to, access or otherwise use
                                        the Services, including, without limitation, modems, hardware,
                                        servers, software, operating systems, networking, web servers
                                        and the like (collectively, “Equipment”). Customer shall also be
                                        responsible for maintaining the security of the Equipment,
                                        Customer account, passwords (including but not limited to
                                        administrative and user passwords) and files, and for all uses of
                                        Customer account or the Equipment with or without Customer’s
                                        knowledge or consent.</p>
                                        


                                        <h3 className="card-title">3. CONFIDENTIALITY; PROPRIETARY RIGHTS:</h3>
                                        <p className="text"><b>3.1</b> Each party (the “Receiving Party”) understands that the other party 
                                            (the “Disclosing Party”) has disclosed or may disclose business,
                                            technical or financial information relating to the Disclosing
                                            Party’s business (hereinafter referred to as “Proprietary
                                            Information” of the Disclosing Party). Proprietary Information
                                            of Company includes non-public information regarding features,
                                            functionality and performance of the Service. Proprietary
                                            Information of Customer includes non-public data provided by
                                            Customer to Company to enable the provision of the Services
                                            (“Customer Data”). The Receiving Party agrees: (i) to take
                                            reasonable precautions to protect such Proprietary Information,
                                            and (ii) not to use (except in performance of the Services or as
                                            otherwise permitted herein) or divulge to any third person any
                                            such Proprietary Information. The Disclosing Party agrees that
                                            the foregoing shall not apply with respect to any information
                                            after five (5) years following the disclosure thereof or any
                                            information that the Receiving Party can document (a) is or
                                            becomes generally available to the public, or (b) was in its
                                            possession or known by it prior to receipt from the Disclosing
                                            Party, or (c) was rightfully disclosed to it without restriction by a
                                            third party, or (d) was independently developed without use of
                                            any Proprietary Information of the Disclosing Party or (e) is
                                            required to be disclosed by law.</p>

                                        <p className="text"><b>3.2</b> Customer shall own
                                        all right, title and interest in and to the Customer Data[, as well
                                        as any data that is based on or derived from the Customer Data
                                        and provided to Customer as part of the Services] Company
                                        shall own and retain all right, title and interest in and to (a) the
                                        Services and Software, all improvements, enhancements or
                                        3 modifications thereto, (b) any software, applications, inventions
                                        or other technology developed in connection with or support, and
                                        (c) all intellectual property rights related to any of the foregoing.</p>
                                        <p className="text"><b>2.3</b> Notwithstanding
                                        anything to the contrary, Company shall have the right collect
                                        and analyze data and other information relating to the provision,
                                        use and performance of various aspects of the Services and
                                        related systems and technologies (including, without limitation,
                                        information concerning Customer Data and data derived
                                        therefrom), and Company will be free (during and after the term
                                        hereof) to (i) use such information and data to improve and
                                        enhance the Services and for other development, diagnostic and
                                        corrective purposes in connection with the Services and other
                                        Company offerings, and (ii) disclose such data solely in
                                        aggregate or other de-identified form in connection with its
                                        business. No rights or licenses are granted except as expressly
                                        set forth herein.</p>
  
                                        <h3 className="card-title">4. PAYMENT OF FEES:</h3>
                                        <p className="text"><b>4.1</b> Customer will pay
                                            Company the then applicable fees described in the Order Form
                                            for the Services in accordance with the terms therein (the
                                            “Fees”). If Customer’s use of the Services exceeds the Service
                                            Capacity set forth on the Order Form or otherwise requires the
                                            payment of additional fees (per the terms of this Agreement),
                                            Customer shall be billed for such usage and Customer agrees to
                                            pay the additional fees in the manner provided herein. Company
                                            reserves the right to change the Fees or applicable charges and to
                                            institute new charges and Fees at the end of the Initial Service
                                            Term or then current renewal term, upon thirty (30) days prior
                                            notice to Customer (which may be sent by email). If Customer
                                            believes that Company has billed Customer incorrectly,
                                            Customer must contact Company no later than 60 days after the
                                            closing date on the first billing statement in which the error or
                                            problem appeared, in order to receive an adjustment or credit.
                                            Inquiries should be directed to Company’s customer support
                                            department.</p>

                                            <p className="text"><b>4.2</b> Company may
                                            choose to bill through an invoice, in which case, full payment for
                                            invoices issued in any given month must be received by
                                            Company thirty (30) days after the mailing date of the invoice.
                                            Unpaid amounts are subject to a finance charge of 1.5% per
                                            month on any outstanding balance, or the maximum permitted by
                                            law, whichever is lower, plus all expenses of collection and may
                                            result in immediate termination of Service. Customer shall be
                                            responsible for all taxes associated with Services other than U.S.
                                            taxes based on Company’s net income.</p>


                                            <h3 className="card-title">5. TERM AND TERMINATION:</h3>
                                            <p className="text"><b>5.1</b> Subject to earlier
                                            termination as provided below, this Agreement is for the Initial
                                            Service Term as specified in the Order Form, and shall be
                                            automatically renewed for additional periods of the same
                                            duration as the Initial Service Term (collectively, the “Term”),
                                            unless either party requests termination at least thirty (30) days
                                            prior to the end of the then-current term.</p>

                                            <p className="text"><b>5.2</b> In addition to any
                                            other remedies it may have, either party may also terminate this
                                            Agreement upon thirty (30) days’ notice (or without notice in the
                                            case of nonpayment), if the other party materially breaches any
                                            of the terms or conditions of this Agreement. Customer will pay
                                            in full for the Services up to and including the last day on which
                                            the Services are provided. Upon any termination, Company will
                                            make all Customer Data available to Customer for electronic
                                            retrieval for a period of thirty (30) days, but thereafter Company
                                            may, but is not obligated to, delete stored Customer Data. All
                                            sections of this Agreement which by their nature should survive
                                            termination will survive termination, including, without
                                            limitation, accrued rights to payment, confidentiality obligations,
                                            warranty disclaimers, and limitations of liability.</p>

                                            <h3 className="card-title">6. WARRANTY AND DISCLAIMER:</h3>
                                            <p className="text">Company shall use reasonable efforts consistent with
                                            prevailing industry standards to maintain the Services in a
                                            manner which minimizes errors and interruptions in the Services.
                                            Services may be temporarily unavailable for scheduled
                                            maintenance or for unscheduled emergency maintenance, either
                                            by Company or by third-party providers, or because of other
                                            causes beyond Company’s reasonable control, but Company
                                            shall use reasonable efforts to provide advance notice in writing
                                            or by e-mail of any scheduled service disruption. HOWEVER,
                                            COMPANY DOES NOT WARRANT THAT THE SERVICES
                                            WILL BE UNINTERRUPTED OR ERROR FREE; NOR DOES
                                            IT MAKE ANY WARRANTY AS TO THE RESULTS THAT
                                            MAY BE OBTAINED FROM USE OF THE SERVICES.
                                            EXCEPT AS EXPRESSLY SET FORTH IN THIS SECTION,
                                            THE SERVICES ARE PROVIDED “AS IS” AND COMPANY
                                            DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED,
                                            INCLUDING, BUT NOT LIMITED TO, IMPLIED
                                            WARRANTIES OF MERCHANTABILITY AND FITNESS
                                            FOR A PARTICULAR PURPOSE AND
                                            NON-INFRINGEMENT.</p>

                                            <h3 className="card-title">7. WARRANTY AND DISCLAIMER:</h3>
                                            <p className="text">NOTWITHSTANDING ANYTHING TO THE
                                                CONTRARY, EXCEPT FOR BODILY INJURY OF A
                                                PERSON, COMPANY AND ITS SUPPLIERS (INCLUDING
                                                BUT NOT LIMITED TO ALL EQUIPMENT AND
                                                TECHNOLOGY SUPPLIERS), OFFICERS, AFFILIATES,
                                                REPRESENTATIVES, CONTRACTORS AND EMPLOYEES
                                                SHALL NOT BE RESPONSIBLE OR LIABLE WITH
                                                RESPECT TO ANY SUBJECT MATTER OF THIS
                                                AGREEMENT OR TERMS AND CONDITIONS RELATED
                                                THERETO UNDER ANY CONTRACT, NEGLIGENCE,
                                                STRICT LIABILITY OR OTHER THEORY: (A) FOR ERROR
                                                OR INTERRUPTION OF USE OR FOR LOSS OR
                                                INACCURACY OR CORRUPTION OF DATA OR COST OF
                                                PROCUREMENT OF SUBSTITUTE GOODS, SERVICES OR
                                                TECHNOLOGY OR LOSS OF BUSINESS; (B) FOR ANY
                                                INDIRECT, EXEMPLARY, INCIDENTAL, SPECIAL OR
                                                CONSEQUENTIAL DAMAGES; (C) FOR ANY MATTER
                                                BEYOND COMPANY’S REASONABLE CONTROL; OR (D)
                                                FOR ANY AMOUNTS THAT, TOGETHER WITH
                                                AMOUNTS ASSOCIATED WITH ALL OTHER CLAIMS,
                                                EXCEED THE FEES PAID BY CUSTOMER TO COMPANY
                                                FOR THE SERVICES UNDER THIS AGREEMENT IN THE
                                                12 MONTHS PRIOR TO THE ACT THAT GAVE RISE TO
                                                THE LIABILITY, IN EACH CASE, WHETHER OR NOT
                                                COMPANY HAS BEEN ADVISED OF THE POSSIBILITY OF
                                                SUCH DAMAGES.</p>
                                                <h3 className="card-title">8. MISCELLANEOUS:</h3>
                                            <p className="text">If any provision of this Agreement is found to be
                                                unenforceable or invalid, that provision will be limited or
                                                eliminated to the minimum extent necessary so that this
                                                Agreement will otherwise remain in full force and effect and
                                                enforceable. This Agreement is not assignable, transferable or
                                                sublicensable by Customer except with Company’s prior written
                                                consent. Company may transfer and assign any of its rights and
                                                obligations under this Agreement without consent. This
                                                Agreement is the complete and exclusive statement of the mutual
                                                understanding of the parties and supersedes and cancels all
                                                previous written and oral agreements, communications and other
                                                understandings relating to the subject matter of this Agreement,
                                                and that all waivers and modifications must be in a writing
                                                signed by both parties, except as otherwise provided herein. No
                                                agency, partnership, joint venture, or employment is created as a
                                                result of this Agreement and Customer does not have any
                                                authority of any kind to bind Company in any respect
                                                whatsoever. In any action or proceeding to enforce rights under
                                                this Agreement, the prevailing party will be entitled to recover
                                                costs and attorneys’ fees. All notices under this Agreement will
                                                be in writing and will be deemed to have been duly given when
                                                received, if personally delivered; when receipt is electronically

                                                confirmed, if transmitted by facsimile or e-mail; the day after it
                                                is sent, if sent for next day delivery by recognized overnight
                                                delivery service; and upon receipt, if sent by certified or
                                                registered mail, return receipt requested. This Agreement shall
                                                be governed by the laws of the State of Florida without regard to
                                                its conflict of laws provisions. [The parties shall work together
                                                in good faith to issue at least one mutually agreed upon press
                                                release within 90 days of the Effective Date, and Customer
                                                otherwise agrees to reasonably cooperate with Company to serve
                                                as a reference account upon request.]</p>

                                                <h2 className="card-title">Service Level Terms</h2>
                                        <p className="text">The Services shall be available 99.9%, measured monthly, excluding holidays and weekends and scheduled maintenance. If
                                        Customer requests maintenance during these hours, any uptime or downtime calculation will exclude periods affected by such
                                        maintenance. Further, any downtime resulting from outages of third party connections or utilities or other reasons beyond Company’s
                                        control will also be excluded from any such calculation. Customer's sole and exclusive remedy, and Company's entire liability, in
                                        connection with Service availability shall be that for each period of downtime lasting longer than 3 hours, Company will credit
                                        Customer 5% of Service fees for each period of 60 or more consecutive minutes of downtime; provided that no more than one such
                                        credit will accrue per day. Downtime shall begin to accrue as soon as Customer (with notice to Company) recognizes that downtime
                                        is taking place, and continues until the availability of the Services is restored. In order to receive downtime credit, Customer must
                                        notify Company in writing within 24 hours from the time of downtime, and failure to provide such notice will forfeit the right to
                                        receive downtime credit. Such credits may not be redeemed for cash and shall not be cumulative beyond a total of credits for one (1)
                                        week of Service Fees in any one (1) calendar month in any event. Company will only apply a credit to the month in which the
                                        incident occurred. Company’s blocking of data communications or other Service in accordance with its policies shall not be deemed
                                        to be a failure of Company to provide adequate service levels under this Agreement.</p>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}
export default PageTerms;
