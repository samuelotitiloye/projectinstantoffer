--
-- PostgreSQL database dump
--

-- Dumped from database version 11.3
-- Dumped by pg_dump version 11.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: listing_contract; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.listing_contract (
    id integer NOT NULL,
    "BUYER_1" character varying,
    "SIGNATURE_BUYER_1" character varying,
    "DATE" character varying,
    "L3" character varying,
    "L4" character varying,
    "L5" character varying,
    "L7" character varying,
    "L8A" character varying,
    "L8B" integer,
    "L8C" character varying,
    "L12" character varying,
    "L13" character varying,
    "L41" boolean,
    "L54" boolean,
    "L63" boolean,
    "L71" boolean,
    "L72" boolean,
    "L73" boolean,
    "L115" character varying,
    "L118" character varying,
    "L119" character varying,
    "L121" character varying,
    "L146" boolean,
    "L148A" boolean,
    "L148B" integer,
    "L148C" integer,
    "L150A" boolean,
    "L150B" integer,
    "L150C" integer,
    "L152A" boolean,
    "L152B" character varying,
    "L163" boolean,
    "L164" boolean,
    "L165A" character varying,
    "L165B" character varying,
    "L175" boolean,
    "L196" boolean,
    "L198" boolean,
    "L200" character varying,
    "L237" character varying,
    "L245" character varying,
    "L246A" character varying,
    "L246B" character varying,
    "L247A" character varying,
    "L247B" character varying,
    "L248" character varying,
    "L9" text,
    "L131" integer,
    "COMPANY" text,
    "COMPANY_PHONE" character varying,
    "BUYER_1_PHONE" character varying,
    "COMPANY_ADDRESS" text,
    "BUYER_1_EMAIL" text,
    "BUYER_1_ADDRESS" text,
    pdf_path character varying
);


--
-- Name: Listing_Contract_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.listing_contract_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: Listing_Contract_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.listing_contract_id_seq OWNED BY public.listing_contract.id;


--
-- Name: Purchase_Agreement; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.purchase_agreement (
    id integer NOT NULL,
    "BUYER_1" text,
    "DATE" text,
    "COMPANY_1" text,
    "C0MPANY_2" text,
    "SIGNATURE_BUYER_1" text,
    "L6A" text,
    "L6B" text,
    "L7A" boolean,
    "L7B" text,
    "L12" text,
    "L13A" text,
    "L13B" text,
    "L14" text,
    "L29" text,
    "L32" text,
    "L34" text,
    "L35" text,
    "L37" integer,
    "L39" integer,
    "L40" integer,
    "L41" integer,
    "L42" integer,
    "L45" text,
    "L49" boolean,
    "L53" boolean,
    "L54" boolean,
    "L55" text,
    "L57" boolean,
    "L58" boolean,
    "L59" boolean,
    "L60" boolean,
    "L61" boolean,
    "L62A" boolean,
    "L62B" text,
    "L63" integer,
    "L64" integer,
    "L70" boolean,
    "L73" boolean,
    "L76" boolean,
    "L77" text,
    "L114" boolean,
    "L115" boolean,
    "L118" text,
    "L127" boolean,
    "L133" text,
    "L141" text,
    "L145A" text,
    "L145B" boolean,
    "L146" text,
    "L156" text,
    "L159" boolean,
    "L160A" boolean,
    "L160B" text,
    "L161A" boolean,
    "L161B" text,
    "L170" boolean,
    "L172" boolean,
    "L178" boolean,
    "L184" character varying,
    "L192" text,
    "L198" boolean,
    "L201" boolean,
    "L210" boolean,
    "L215A" boolean,
    "L215B" boolean,
    "L215C" boolean,
    "L215D" text,
    "L215E" integer,
    "L217A" boolean,
    "L217B" boolean,
    "L217C" boolean,
    "L217D" boolean,
    "L217E" text,
    "L219" boolean,
    "L226" boolean,
    "L228" boolean,
    "L231" boolean,
    "L233" boolean,
    "L239" boolean,
    "L250" boolean,
    "L251" text,
    "L252" text,
    "L257A" boolean,
    "L257B" boolean,
    "L257C" boolean,
    "L257D" boolean,
    "L258A" boolean,
    "L258B" text,
    "L263" text,
    "L265" text,
    "L270" boolean,
    "L271A" boolean,
    "L271B" text,
    "L359" boolean,
    "L360" boolean,
    "L371A" boolean,
    "L371B" boolean,
    "L373" boolean,
    "L377" boolean,
    "L379" boolean,
    "L388A" boolean,
    "L388B" boolean,
    "L389A" boolean,
    "L389B" text,
    "L390" text,
    "L391" boolean,
    "L394A" text,
    "L394B" boolean,
    "L394C" boolean,
    "L394D" boolean,
    "L394E" boolean,
    "L395" text,
    "L396A" text,
    "L396B" boolean,
    "L396C" boolean,
    "L396D" boolean,
    "L396E" boolean,
    "L397" text,
    "L403" boolean,
    "L404" boolean,
    "L454" text,
    "L494" boolean,
    pdf_path character varying
);


--
-- Name: Purchase_Agreement_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.purchase_agreement_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: Purchase_Agreement_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.purchase_agreement_id_seq OWNED BY public.purchase_agreement.id;


--
-- Name: user; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."user" (
    id integer NOT NULL,
    username character varying(80) NOT NULL,
    password character varying(1000) NOT NULL
);


--
-- Name: user_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;


--
-- Name: Purchase_Agreement id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.purchase_agreement ALTER COLUMN id SET DEFAULT nextval('public.purchase_agreement_id_seq'::regclass);


--
-- Name: listing_contract id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.listing_contract ALTER COLUMN id SET DEFAULT nextval('public.listing_contract_id_seq'::regclass);


--
-- Name: user id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);


--
-- Name: listing_contract Listing_Contract_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.listing_contract
    ADD CONSTRAINT listing_contract_pkey PRIMARY KEY (id);


--
-- Name: Purchase_Agreement Purchase_Agreement_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.purchase_agreement
    ADD CONSTRAINT purchase_agreement_pkey PRIMARY KEY (id);


--
-- Name: user user_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);


--
-- Name: user user_username_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_username_key UNIQUE (username);


--
-- PostgreSQL database dump complete
--

