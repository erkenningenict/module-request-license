(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    216: function(e, t, n) {
      e.exports = n(424);
    },
    421: function(e, t, n) {},
    423: function(e, t, n) {},
    424: function(e, t, n) {
      'use strict';
      n.r(t);
      n(217), n(234), n(236), n(237);
      var r,
        a = n(0),
        o = n(51),
        l = n(214),
        i = n(52),
        s = n(212),
        c = n(14),
        p = n(6),
        u = n(7),
        m = n(9),
        d = n(8),
        h = n(10),
        g = n(429),
        b = n(430),
        v = n(54),
        f = n(2);
      !(function(e) {
        (e[(e.Login = 0)] = 'Login'),
          (e[(e.CountryCheck = 1)] = 'CountryCheck'),
          (e[(e.PersonalInfo = 2)] = 'PersonalInfo'),
          (e[(e.BSN = 3)] = 'BSN'),
          (e[(e.Email = 4)] = 'Email'),
          (e[(e.PreEducationOption = 5)] = 'PreEducationOption'),
          (e[(e.ExamDate = 6)] = 'ExamDate'),
          (e[(e.Document = 7)] = 'Document'),
          (e[(e.DocumentAG = 8)] = 'DocumentAG'),
          (e[(e.Approval = 9)] = 'Approval'),
          (e[(e.Summary = 10)] = 'Summary'),
          (e[(e.Completion = 11)] = 'Completion');
      })(r || (r = {}));
      var E = n(18),
        O = n(19),
        y = n.n(O);
      function j() {
        var e = Object(E.a)([
          '\n  mutation checkForExistingPersonByBsn($bsn: Int!, $birthDate: Date!) {\n    checkForExistingPersonByBsn(bsn: $bsn, birthDate: $birthDate) {\n      personFoundInDatabase\n      personFoundInGba\n      message\n      persons {\n        PersoonID\n      }\n    }\n  }\n',
        ]);
        return (
          (j = function() {
            return e;
          }),
          e
        );
      }
      function k() {
        var e = Object(E.a)([
          '\n  mutation requestLicense(\n    $input: requestLicenseInput!\n    $personDataInput: basicPersonData\n    $createPersonByBsnInput: createPersonByBsn\n    $createPersonByPersonDataInput: createPersonByPersonData\n  ) {\n    requestLicense(\n      input: $input\n      personDataInput: $personDataInput\n      createPersonByBsnInput: $createPersonByBsnInput\n      createPersonByPersonDataInput: $createPersonByPersonDataInput\n    ) {\n      VrijstellingsVerzoekID\n      invoiceLink\n      requestFormPdfLink\n    }\n  }\n',
        ]);
        return (
          (k = function() {
            return e;
          }),
          e
        );
      }
      var F = y()(k()),
        C = y()(j());
      function S() {
        var e = Object(E.a)([
          '\n  {\n    tariefByCertificaatCode(certificaatCode: "AG", individueleAanvraag: true) {\n      TotaalExtBtw\n    }\n  }\n',
        ]);
        return (
          (S = function() {
            return e;
          }),
          e
        );
      }
      function P() {
        var e = Object(E.a)([
          '\n  {\n    my {\n      Persoon {\n        PersoonID\n        Voorletters\n        Tussenvoegsel\n        Achternaam\n        Geslacht\n        Nationaliteit\n        Geboortedatum\n        IsGbaGeregistreerd\n        BSN\n        Contactgegevens {\n          ContactgegevensID\n          Adresregel1\n          Adresregel2\n          Huisnummer\n          HuisnummerToevoeging\n          Postcode\n          Woonplaats\n          Land\n          Email\n        }\n      }\n      Certificeringen(alleenGeldig: true, perDatum: 1546300800000) {\n        CertificeringID\n        Nummer\n        BeginDatum\n        EindDatum\n        Certificaat {\n          Naam\n          Code\n        }\n        CertificeringAantekeningen {\n          AantekeningCode\n        }\n      }\n    }\n  }\n',
        ]);
        return (
          (P = function() {
            return e;
          }),
          e
        );
      }
      function D() {
        var e = Object(E.a)([
          '\n  query CertificatesByPreEducation($code: String!) {\n    certificatesByPreEducation(code: $code) {\n      CertificaatID\n      Code\n      Naam\n    }\n  }\n',
        ]);
        return (
          (D = function() {
            return e;
          }),
          e
        );
      }
      function B() {
        var e = Object(E.a)([
          '\n  {\n    Vooropleidingen(codes: []) {\n      VooropleidingID\n      Code\n      Naam\n      Omschrijving\n      Categorie {\n        VooropleidingCategorieID\n        Naam\n      }\n    }\n  }\n',
        ]);
        return (
          (B = function() {
            return e;
          }),
          e
        );
      }
      function N() {
        var e = Object(E.a)([
          '\n  {\n    preEducationCategories {\n      VooropleidingCategorieID\n      Naam\n    }\n  }\n',
        ]);
        return (
          (N = function() {
            return e;
          }),
          e
        );
      }
      function w() {
        var e = Object(E.a)([
          '\n  {\n    Certificaten {\n      CertificaatID\n      Naam\n      Code\n    }\n  }\n',
        ]);
        return (
          (w = function() {
            return e;
          }),
          e
        );
      }
      function I() {
        var e = Object(E.a)([
          '\n  {\n    Nationaliteiten {\n      Text\n      Value\n    }\n  }\n',
        ]);
        return (
          (I = function() {
            return e;
          }),
          e
        );
      }
      function x() {
        var e = Object(E.a)(['\n  {\n    Landen {\n      Text\n      Value\n    }\n  }\n']);
        return (
          (x = function() {
            return e;
          }),
          e
        );
      }
      var V = y()(x()),
        A = y()(I()),
        G = (y()(w()), y()(N())),
        L = y()(B()),
        R = y()(D()),
        T = y()(P()),
        q = y()(S()),
        H = n(213),
        M = (function(e) {
          function t() {
            return Object(p.a)(this, t), Object(m.a)(this, Object(d.a)(t).apply(this, arguments));
          }
          return (
            Object(h.a)(t, e),
            Object(u.a)(t, [
              {
                key: 'render',
                value: function() {
                  return a.createElement(
                    'div',
                    { className: 'alert alert-' + (this.props.type || 'danger'), role: 'alert' },
                    this.props.children,
                  );
                },
              },
            ]),
            t
          );
        })(a.Component),
        W = (function(e) {
          function t() {
            return Object(p.a)(this, t), Object(m.a)(this, Object(d.a)(t).apply(this, arguments));
          }
          return (
            Object(h.a)(t, e),
            Object(u.a)(t, [
              {
                key: 'render',
                value: function() {
                  return a.createElement(
                    'div',
                    { className: 'panel panel-default' },
                    a.createElement(
                      'div',
                      { className: 'panel-heading' },
                      a.createElement('h3', { className: 'panel-title' }, this.props.title),
                    ),
                    a.createElement(
                      'div',
                      { className: 'panel-body' },
                      a.createElement('div', { className: 'contents' }, this.props.children),
                    ),
                  );
                },
              },
            ]),
            t
          );
        })(a.Component),
        z = (function(e) {
          function t() {
            return Object(p.a)(this, t), Object(m.a)(this, Object(d.a)(t).apply(this, arguments));
          }
          return (
            Object(h.a)(t, e),
            Object(u.a)(t, [
              {
                key: 'render',
                value: function() {
                  return a.createElement(
                    'span',
                    null,
                    a.createElement('i', { className: 'pi pi-spin pi-spinner' }),
                    ' ',
                    this.props.text
                      ? this.props.text
                      : a.createElement(
                          'span',
                          { style: { verticalAlign: 'top' } },
                          'Gegevens laden...',
                        ),
                  );
                },
              },
            ]),
            t
          );
        })(a.Component),
        Y = n(17),
        U = (function(e) {
          function t() {
            return Object(p.a)(this, t), Object(m.a)(this, Object(d.a)(t).apply(this, arguments));
          }
          return (
            Object(h.a)(t, e),
            Object(u.a)(t, [
              {
                key: 'render',
                value: function() {
                  return a.createElement(Y.Button, {
                    type: 'button',
                    label: this.props.label ? this.props.label : 'Volgende',
                    className: 'btn btn-primary',
                    icon: this.props.icon ? this.props.icon : 'pi pi-angle-right',
                    iconPos: 'right',
                    onClick: this.props.onClick,
                    disabled: this.props.disabled,
                  });
                },
              },
            ]),
            t
          );
        })(a.Component),
        $ = (function(e) {
          function t() {
            return Object(p.a)(this, t), Object(m.a)(this, Object(d.a)(t).apply(this, arguments));
          }
          return (
            Object(h.a)(t, e),
            Object(u.a)(t, [
              {
                key: 'render',
                value: function() {
                  return a.createElement(Y.Button, {
                    type: 'button',
                    label: this.props.label ? this.props.label : 'Vorige',
                    icon: this.props.icon ? this.props.icon : 'pi pi-angle-left',
                    iconPos: 'left',
                    className: 'p-button-secondary',
                    onClick: this.props.onClick,
                    disabled: this.props.disabled,
                  });
                },
              },
            ]),
            t
          );
        })(a.Component),
        J = (function(e) {
          function t() {
            return Object(p.a)(this, t), Object(m.a)(this, Object(d.a)(t).apply(this, arguments));
          }
          return (
            Object(h.a)(t, e),
            Object(u.a)(t, [
              {
                key: 'render',
                value: function() {
                  return a.createElement(
                    'div',
                    { className: this.props.className || 'col-md-12' },
                    this.props.children,
                  );
                },
              },
            ]),
            t
          );
        })(a.Component),
        K = n(201),
        Z = (function(e) {
          function t() {
            return Object(p.a)(this, t), Object(m.a)(this, Object(d.a)(t).apply(this, arguments));
          }
          return (
            Object(h.a)(t, e),
            Object(u.a)(t, [
              {
                key: 'render',
                value: function() {
                  return a.createElement(
                    'div',
                    {
                      className:
                        'form-group row ' + (this.hasError(this.props.name) ? 'has-error' : ''),
                    },
                    this.props.label
                      ? a.createElement(
                          'label',
                          { htmlFor: this.props.for, className: 'col-sm-4 col-md-3 control-label' },
                          this.props.label,
                        )
                      : null,
                    a.createElement(
                      'div',
                      { className: 'col-sm-8 col-md-9' },
                      this.props.children,
                      a.createElement(
                        'span',
                        { className: 'help-block' },
                        this.getError(this.props.name),
                      ),
                    ),
                  );
                },
              },
              {
                key: 'hasError',
                value: function(e) {
                  return void 0 !== this.getError(e) && '' !== this.getError(e);
                },
              },
              {
                key: 'getError',
                value: function(e) {
                  if (!e || !this.props.form) return '';
                  var t = e.split('.'),
                    n = this.props.form.errors,
                    r = !0,
                    a = !1,
                    o = void 0;
                  try {
                    for (var l, i = t[Symbol.iterator](); !(r = (l = i.next()).done); r = !0) {
                      var s = l.value;
                      if (!n) break;
                      n = n[s];
                    }
                  } catch (c) {
                    (a = !0), (o = c);
                  } finally {
                    try {
                      r || null == i.return || i.return();
                    } finally {
                      if (a) throw o;
                    }
                  }
                  return n;
                },
              },
            ]),
            t
          );
        })(a.Component),
        _ = (function(e) {
          function t() {
            return Object(p.a)(this, t), Object(m.a)(this, Object(d.a)(t).apply(this, arguments));
          }
          return (
            Object(h.a)(t, e),
            Object(u.a)(t, [
              {
                key: 'render',
                value: function() {
                  var e = this;
                  return a.createElement(
                    Z,
                    {
                      label: this.props.label,
                      for: this.props.id,
                      form: this.props.form,
                      name: this.props.name,
                    },
                    this.props.loading
                      ? a.createElement('span', null, a.createElement(z, null))
                      : a.createElement(
                          'div',
                          { className: 'checkbox' },
                          a.createElement(K.Checkbox, {
                            id: this.props.id,
                            checked: this.getFormValue(),
                            onChange: function(t) {
                              e.props.form && e.props.name
                                ? (e.props.form.setFieldValue(e.props.name, t.checked),
                                  e.props.form.setFieldTouched(e.props.name, !0))
                                : e.props.onChange && e.props.onChange(t);
                            },
                            readOnly: this.props.readonly,
                          }),
                          a.createElement('i', { style: { marginLeft: 10 } }, this.props.help),
                        ),
                  );
                },
              },
              {
                key: 'getFormValue',
                value: function() {
                  if (this.props.value) return this.props.value;
                  if (this.props.form && this.props.name) {
                    var e = this.props.name.split('.'),
                      t = this.props.form.values,
                      n = !0,
                      r = !1,
                      a = void 0;
                    try {
                      for (var o, l = e[Symbol.iterator](); !(n = (o = l.next()).done); n = !0) {
                        var i = o.value;
                        if (!t) return;
                        t = t[i];
                      }
                    } catch (s) {
                      (r = !0), (a = s);
                    } finally {
                      try {
                        n || null == l.return || l.return();
                      } finally {
                        if (r) throw a;
                      }
                    }
                    return t;
                  }
                },
              },
            ]),
            t
          );
        })(a.Component),
        Q = (function(e) {
          function t(e) {
            var n;
            return (
              Object(p.a)(this, t),
              ((n = Object(m.a)(this, Object(d.a)(t).call(this, e))).setStep = n.setStep.bind(
                Object(f.a)(Object(f.a)(n)),
              )),
              n
            );
          }
          return (
            Object(h.a)(t, e),
            Object(u.a)(t, [
              {
                key: 'setStep',
                value: function(e) {
                  this.props.values.onStep(e);
                },
              },
            ]),
            t
          );
        })(a.Component),
        X = n(202),
        ee = n(203),
        te = n(204),
        ne = n(70),
        re = n.n(ne),
        ae = n(11),
        oe = new Date(),
        le = 'Dit is een verplicht veld',
        ie = ae.object().shape({
          Persoon: ae.object().shape({
            Voorletters: ae
              .string()
              .required(le)
              .matches(
                /^(([A-Z]|Adr|Chr|Fr|Fred|IJ|Jac|Joh|Ph|St|Th|Tj)(\.){1}?){1,5}$/,
                'Voorletters zijn geformatteerd volgens hoofdletters en punten: "A.B.C.D.E.", tenzij Adr.',
              ),
            Achternaam: ae.string().required(le),
            Geboortedatum: ae
              .date()
              .strict(!0)
              .typeError('Ongeldige datum')
              .required(le)
              .min(
                new Date(oe.getFullYear() - 100, oe.getMonth(), oe.getDate()),
                'Geboortedatum mag niet meer dan 100 jaar in het verleden liggen',
              )
              .max(
                new Date(oe.getFullYear() - 18, oe.getMonth(), oe.getDate()),
                'Geboortedatum moet meer dan 18 jaar in het verleden liggen',
              ),
            Contactgegevens: ae.object().shape({
              Adresregel1: ae.string().required(le),
              Huisnummer: ae
                .number()
                .transform(function(e) {
                  return isNaN(e) ? void 0 : e;
                })
                .required(le)
                .integer('Huisnummer moet een getal zijn')
                .positive('Huisnummer mag niet negatief zijn')
                .min(1, 'Huisnummer moet groter dan 0 zijn'),
              Postcode: ae
                .string()
                .required(le)
                .when('Land', {
                  is: 'Nederland',
                  then: ae
                    .string()
                    .matches(
                      /^[1-9][0-9]{3}[\s][A-Z]{2}$/,
                      'Nederlandse postcode moet geformatteerd zijn als "1234 AB". Buitenlandse postcode? Wijzig eerst het land.',
                    ),
                }),
              Woonplaats: ae.string().required(le),
              Land: ae.string().required(le),
              Email: ae
                .string()
                .required(le)
                .email('E-mailadres is incorrect'),
            }),
          }),
          FormOptions: ae.object().shape({
            ExamDate: ae
              .date()
              .strict(!0)
              .typeError('Ongeldige datum')
              .required(le)
              .min(
                re()()
                  .subtract(5, 'years')
                  .toDate(),
                'Datum mag maximaal 5 jaar in het verleden liggen',
              )
              .max(new Date(), 'Datum mag niet in de toekomst liggen')
              .when('Vooropleiding.Code', {
                is: '30.02',
                then: ae
                  .date()
                  .strict(!0)
                  .min(new Date(2019, 0, 1), 'Datum mag niet voor 1 januari 2019 liggen'),
              }),
            VooropleidingCategorie: ae.string().required('Selecteer een opleidingsland'),
            Vooropleiding: ae.string().required('Selecteer een vooropleiding'),
            Certificaat: ae.string().required('Selecteer een certificering'),
          }),
        });
      function se(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        try {
          return (
            n ? ae.reach(ie, t).validateSync(n) : ie.validateSyncAt(t, e.values),
            e.setFieldError(t, ''),
            !0
          );
        } catch (r) {
          r.errors && e.setFieldError(t, r.errors[0]);
        }
        return !1;
      }
      var ce = (function(e) {
          function t() {
            return Object(p.a)(this, t), Object(m.a)(this, Object(d.a)(t).apply(this, arguments));
          }
          return (
            Object(h.a)(t, e),
            Object(u.a)(t, [
              {
                key: 'render',
                value: function() {
                  var e = this,
                    t = function(t) {
                      e.props.form && e.props.form.handleChange(t),
                        e.props.onChange && e.props.onChange(t);
                    },
                    n = function(t) {
                      e.props.form &&
                        (e.props.form.handleBlur(t),
                        e.props.name && se(e.props.form, e.props.name)),
                        e.props.onBlur && e.props.onBlur(t);
                    };
                  return this.props.readonly && !this.getFormValue()
                    ? null
                    : a.createElement(
                        Z,
                        {
                          label: this.props.label,
                          for: this.props.id,
                          form: this.props.form,
                          name: this.props.name,
                        },
                        this.props.mask
                          ? a.createElement(X.InputMask, {
                              id: this.props.id,
                              name: this.props.name,
                              placeholder: this.props.placeholder || this.props.label,
                              mask: this.props.mask,
                              value: this.getFormValue(),
                              readonly: this.props.readonly,
                              onChange: t,
                              onComplete: function(t) {
                                e.props.form &&
                                  (e.props.form.handleBlur(t.originalEvent),
                                  e.props.name &&
                                    se(e.props.form, e.props.name, t.originalEvent.target.value));
                              },
                              className: 'form-control',
                            })
                          : this.props.isTextArea
                            ? a.createElement(te.InputTextarea, {
                                id: this.props.id,
                                name: this.props.name,
                                placeholder: this.props.placeholder || this.props.label,
                                mask: this.props.mask,
                                keyfilter: this.props.keyfilter,
                                value: this.getFormValue(),
                                readOnly: this.props.readonly,
                                onChange: t,
                                onBlur: n,
                                className: 'form-control',
                              })
                            : a.createElement(ee.InputText, {
                                id: this.props.id,
                                name: this.props.name,
                                placeholder: this.props.placeholder || this.props.label,
                                mask: this.props.mask,
                                keyfilter: this.props.keyfilter,
                                value: this.getFormValue(),
                                readOnly: this.props.readonly,
                                onChange: t,
                                onBlur: n,
                                className: 'form-control',
                              }),
                      );
                },
              },
              {
                key: 'getFormValue',
                value: function() {
                  if (this.props.value) return this.props.value;
                  if (this.props.form && this.props.name) {
                    var e = this.props.name.split('.'),
                      t = this.props.form.values,
                      n = !0,
                      r = !1,
                      a = void 0;
                    try {
                      for (var o, l = e[Symbol.iterator](); !(n = (o = l.next()).done); n = !0) {
                        t = t[o.value];
                      }
                    } catch (i) {
                      (r = !0), (a = i);
                    } finally {
                      try {
                        n || null == l.return || l.return();
                      } finally {
                        if (r) throw a;
                      }
                    }
                    return t;
                  }
                },
              },
            ]),
            t
          );
        })(a.Component),
        pe = (function(e) {
          function t() {
            return Object(p.a)(this, t), Object(m.a)(this, Object(d.a)(t).apply(this, arguments));
          }
          return (
            Object(h.a)(t, e),
            Object(u.a)(t, [
              {
                key: 'render',
                value: function() {
                  return a.createElement('div', { className: 'row' }, this.props.children);
                },
              },
            ]),
            t
          );
        })(a.Component),
        ue = (function(e) {
          function t(e) {
            var n;
            return (
              Object(p.a)(this, t),
              ((n = Object(m.a)(this, Object(d.a)(t).call(this, e))).prevStep = n.prevStep.bind(
                Object(f.a)(Object(f.a)(n)),
              )),
              (n.nextStep = n.nextStep.bind(Object(f.a)(Object(f.a)(n)))),
              n
            );
          }
          return (
            Object(h.a)(t, e),
            Object(u.a)(t, [
              {
                key: 'render',
                value: function() {
                  var e = this;
                  return a.createElement(c.c, { query: q }, function(t) {
                    var n = t.loading,
                      r = t.error,
                      o = t.data;
                    return n
                      ? a.createElement('p', null, a.createElement(z, null))
                      : r
                        ? a.createElement('p', null, 'Fout...')
                        : a.createElement(
                            'div',
                            null,
                            a.createElement(
                              pe,
                              null,
                              a.createElement(
                                J,
                                null,
                                a.createElement(
                                  M,
                                  { type: 'info' },
                                  'Geef aan of u akkoord gaat met de kosten en voeg optioneel een opmerking toe.',
                                ),
                              ),
                            ),
                            a.createElement(
                              pe,
                              null,
                              a.createElement(
                                J,
                                null,
                                a.createElement(ce, {
                                  id: 'remarks',
                                  label: 'Opmerkingen',
                                  name: 'FormOptions.Remarks',
                                  isTextArea: !0,
                                  placeholder: 'Voeg optioneel een opmerking toe',
                                  form: e.props,
                                }),
                              ),
                            ),
                            a.createElement(
                              pe,
                              null,
                              a.createElement(
                                J,
                                null,
                                a.createElement(_, {
                                  id: 'approved',
                                  label: 'U kent de kosten voor aanvraag',
                                  name: 'FormOptions.Approved',
                                  form: e.props,
                                  help: 'De prijs voor de aanvraag is '.concat(
                                    o.tariefByCertificaatCode.TotaalExtBtw || '?',
                                    ' Euro (excl. btw)',
                                  ),
                                }),
                              ),
                            ),
                            a.createElement($, { onClick: e.prevStep }),
                            a.createElement(U, {
                              label: 'Naar samenvatting aanvraag',
                              disabled: !e.props.values.FormOptions.Approved,
                              onClick: e.nextStep,
                            }),
                          );
                  });
                },
              },
              {
                key: 'prevStep',
                value: function() {
                  this.setStep(
                    this.props.values.FormOptions.Vooropleiding &&
                    ['30.02', '30.03'].indexOf(this.props.values.FormOptions.Vooropleiding.Code) >
                      -1
                      ? r.DocumentAG
                      : r.Document,
                  );
                },
              },
              {
                key: 'nextStep',
                value: function() {
                  this.setStep(r.Summary);
                },
              },
            ]),
            t
          );
        })(Q);
      var me = n(209),
        de = {
          monthNames: [
            'Januari',
            'Februari',
            'Maart',
            'April',
            'Mei',
            'Juni',
            'Juli',
            'Augustus',
            'September',
            'Oktober',
            'November',
            'December',
          ],
          monthNamesShort: [
            'jan',
            'feb',
            'mrt',
            'apr',
            'mei',
            'jun',
            'jul',
            'aug',
            'sep',
            'okt',
            'nov',
            'dec',
          ],
          dayNames: [
            'Zondag',
            'Maandag',
            'Dinsdag',
            'Woensdag',
            'Donderdag',
            'Vrijdag',
            'Zaterdag',
          ],
          dayNamesShort: ['zo', 'ma', 'di', 'woe', 'do', 'vr', 'za'],
          dayNamesMin: ['Zo', 'Ma', 'Di', 'Wo ', 'Do', 'Vr ', 'Za'],
          firstDayOfWeek: 1,
          today: 'Vandaag',
          clear: 'Wissen',
        },
        he = (function(e) {
          function t() {
            return Object(p.a)(this, t), Object(m.a)(this, Object(d.a)(t).apply(this, arguments));
          }
          return (
            Object(h.a)(t, e),
            Object(u.a)(t, [
              {
                key: 'render',
                value: function() {
                  var e = this;
                  return a.createElement(
                    Z,
                    {
                      label: this.props.label,
                      for: this.props.id,
                      form: this.props.form,
                      name: this.props.name,
                    },
                    a.createElement(me.Calendar, {
                      id: this.props.id,
                      inputId: this.props.id + 'Input',
                      locale: de,
                      dateFormat: 'dd-mm-yy',
                      value: this.getFormValue(),
                      disabled: this.props.readonly,
                      onChange: function(t) {
                        e.props.form &&
                          e.props.name &&
                          e.props.form.setFieldValue(e.props.name, t.originalEvent.target.value),
                          e.props.onChange && e.props.onChange(t);
                      },
                      onSelect: function(t) {
                        e.props.form &&
                          e.props.name &&
                          (e.props.form.setFieldValue(e.props.name, t.value),
                          se(e.props.form, e.props.name, t.value));
                      },
                      onBlur: function(t) {
                        if (e.props.form && (e.props.form.handleBlur(t), e.props.name)) {
                          var n = e.getFormValue(),
                            r = re()(n, 'DD-MM-YYYY').toDate();
                          r instanceof Date && !isNaN(r)
                            ? (e.props.form.setFieldValue(e.props.name, r),
                              se(e.props.form, e.props.name, r))
                            : se(e.props.form, e.props.name, n);
                        }
                        e.props.onBlur && e.props.onBlur(t);
                      },
                      placeholder: this.props.placeholder,
                      showIcon: !0,
                    }),
                  );
                },
              },
              {
                key: 'getFormValue',
                value: function() {
                  if (this.props.value) return this.props.value;
                  if (this.props.form && this.props.name) {
                    var e = this.props.name.split('.'),
                      t = this.props.form.values,
                      n = !0,
                      r = !1,
                      a = void 0;
                    try {
                      for (var o, l = e[Symbol.iterator](); !(n = (o = l.next()).done); n = !0) {
                        t = t[o.value];
                      }
                    } catch (i) {
                      (r = !0), (a = i);
                    } finally {
                      try {
                        n || null == l.return || l.return();
                      } finally {
                        if (r) throw a;
                      }
                    }
                    return t;
                  }
                },
              },
            ]),
            t
          );
        })(a.Component),
        ge = (function(e) {
          function t(e) {
            var n;
            return (
              Object(p.a)(this, t),
              ((n = Object(m.a)(this, Object(d.a)(t).call(this, e))).state = { isValid: !1 }),
              (n.prevStep = n.prevStep.bind(Object(f.a)(Object(f.a)(n)))),
              (n.nextStep = n.nextStep.bind(Object(f.a)(Object(f.a)(n)))),
              (n.validate = n.validate.bind(Object(f.a)(Object(f.a)(n)))),
              n
            );
          }
          return (
            Object(h.a)(t, e),
            Object(u.a)(t, [
              {
                key: 'render',
                value: function() {
                  var e = this;
                  return a.createElement(c.b, { mutation: C }, function(t, n) {
                    var r = n.data,
                      o = n.loading,
                      l = n.error;
                    return r &&
                      r.checkForExistingPersonByBsn &&
                      !r.checkForExistingPersonByBsn.personFoundInDatabase &&
                      r.checkForExistingPersonByBsn.personFoundInGba
                      ? (e.nextStep(), null)
                      : a.createElement(
                          'div',
                          null,
                          a.createElement(
                            pe,
                            null,
                            a.createElement(
                              J,
                              null,
                              a.createElement(
                                M,
                                { type: 'info' },
                                'Voor correcte adressering en administratie is uw BSN nummer vereist. De licentie wordt uitgegeven in opdracht van de rijksoverheid. Indien u geen BSN heeft neem contact op met Bureau Erkenningen:',
                                ' ',
                                a.createElement(
                                  'a',
                                  { href: 'mailto:info@erkenningen.nl' },
                                  'info@erkenningen.nl',
                                ),
                                '.',
                              ),
                            ),
                          ),
                          a.createElement(
                            pe,
                            null,
                            a.createElement(
                              J,
                              null,
                              l
                                ? a.createElement(
                                    M,
                                    null,
                                    'Ophalen van BSN gegevens mislukt. Probeer het nog een keer of neem contact op met de helpdesk.',
                                  )
                                : null,
                              r &&
                              r.checkForExistingPersonByBsn &&
                              r.checkForExistingPersonByBsn.personFoundInDatabase
                                ? a.createElement(
                                    M,
                                    { type: 'warning' },
                                    r.checkForExistingPersonByBsn.message,
                                    a.createElement('br', null),
                                    'Heeft u al een account bij Bureau Erkenningen? Log dan in door',
                                    ' ',
                                    a.createElement(
                                      'a',
                                      {
                                        href:
                                          '/Default.aspx?tabid=154&returnurl=%2fDefault.aspx%3ftabid%3d293',
                                      },
                                      'hier',
                                    ),
                                    ' te klikken.',
                                  )
                                : null,
                              r &&
                              r.checkForExistingPersonByBsn &&
                              !r.checkForExistingPersonByBsn.personFoundInDatabase &&
                              !r.checkForExistingPersonByBsn.personFoundInGba
                                ? a.createElement(
                                    M,
                                    { type: 'warning' },
                                    'De combinatie BSN en geboortedatum is niet gevonden. Controleer uw invoer.',
                                  )
                                : null,
                              a.createElement(ce, {
                                id: 'bsn',
                                label: 'BSN nummer',
                                placeholder: 'BSN nummer',
                                name: 'Persoon.BSN',
                                readonly: e.props.values.Persoon.IsGbaGeregistreerd,
                                form: e.props,
                                onBlur: e.validate,
                              }),
                            ),
                          ),
                          a.createElement(he, {
                            id: 'birthDate',
                            label: 'Geboortedatum',
                            name: 'Persoon.Geboortedatum',
                            readonly: e.props.values.Persoon.IsGbaGeregistreerd,
                            form: e.props,
                            placeholder: 'dd-mm-jjjj',
                          }),
                          a.createElement(ce, {
                            id: 'surname',
                            label: '(Achternaam)',
                            placeholder: 'Achternaam',
                            name: 'FormOptions.AchternaamBSN',
                            readonly: e.props.values.Persoon.IsGbaGeregistreerd,
                            form: e.props,
                          }),
                          a.createElement($, { onClick: e.prevStep }),
                          a.createElement(U, {
                            onClick: function() {
                              e.validate() &&
                                t({
                                  variables: {
                                    bsn: parseInt('' + e.props.values.Persoon.BSN, 0),
                                    birthDate: e.props.values.Persoon.Geboortedatum,
                                  },
                                });
                            },
                            disabled: e.props.isSubmitting || o,
                            icon: o ? 'pi pi-spin pi-spinner' : '',
                          }),
                        );
                  });
                },
              },
              {
                key: 'validate',
                value: function() {
                  var e = !0;
                  return (
                    !(function(e) {
                      if (!e) return !1;
                      var t = e.toString();
                      t.length < 9 && (t = '0'.concat(e));
                      for (var n = 0, r = 0; r < 8; r++) n += parseInt(t.charAt(r), 10) * (9 - r);
                      return (n -= parseInt(t.charAt(8), 10)) % 11 === 0;
                    })(this.props.values.Persoon.BSN)
                      ? (this.props.setFieldError(
                          'Persoon.BSN',
                          'Ongeldig BSN nummer. Een BSN bestaat uit 8 of 9 cijfers.',
                        ),
                        (e = !1))
                      : this.props.setFieldError('Persoon.BSN', ''),
                    this.props.values.Persoon.Geboortedatum
                      ? this.props.setFieldError('Persoon.Geboortedatum', '')
                      : (this.props.setFieldError(
                          'Persoon.Geboortedatum',
                          'Vul uw geboortedatum in',
                        ),
                        (e = !1)),
                    e
                  );
                },
              },
              {
                key: 'prevStep',
                value: function() {
                  this.setStep(r.CountryCheck);
                },
              },
              {
                key: 'nextStep',
                value: function() {
                  this.setStep(r.Email);
                },
              },
            ]),
            t
          );
        })(Q),
        be = n(71),
        ve = n.n(be),
        fe = (function(e) {
          function t(e) {
            return Object(p.a)(this, t), Object(m.a)(this, Object(d.a)(t).call(this, e));
          }
          return (
            Object(h.a)(t, e),
            Object(u.a)(t, [
              {
                key: 'render',
                value: function() {
                  return this.props.values.licenseRequestResult
                    ? a.createElement(
                        'div',
                        null,
                        a.createElement(
                          pe,
                          null,
                          a.createElement(
                            J,
                            null,
                            a.createElement(
                              M,
                              { type: 'info' },
                              a.createElement(
                                'p',
                                null,
                                'Nadat de aanvraag positief is beoordeeld en de betaling verwerkt, ontvangt u het vakbekwaamheidsbewijs "',
                                this.props.values.FormOptions.Certificaat
                                  ? this.props.values.FormOptions.Certificaat.Naam
                                  : '',
                                '" met als ingangsdatum',
                                ' ',
                                this.props.values.FormOptions.ExamDate
                                  ? a.createElement(
                                      ve.a,
                                      { format: 'DD-MM-YYYY' },
                                      this.props.values.FormOptions.ExamDate.toISOString(),
                                    )
                                  : null,
                                '.',
                              ),
                              a.createElement(
                                'p',
                                null,
                                'Wanneer de beoordeling van bijgevoegde documenten vragen oproept, wordt contact met u opgenomen.',
                              ),
                            ),
                          ),
                        ),
                        a.createElement(
                          pe,
                          null,
                          a.createElement(
                            J,
                            null,
                            a.createElement(
                              'p',
                              null,
                              'Bedankt voor uw aanvraag. U kunt uw factuur',
                              ' ',
                              a.createElement('span', {
                                dangerouslySetInnerHTML: this.getInvoiceJsLink(),
                              }),
                              ' ',
                              'bekijken en via iDEAL betalen.',
                            ),
                            a.createElement(
                              'p',
                              null,
                              'Uw aanvraag document in PDF kunt u',
                              ' ',
                              a.createElement(
                                'a',
                                {
                                  href: this.props.values.licenseRequestResult.requestFormPdfLink,
                                  target: '_blank',
                                },
                                'hier',
                              ),
                              ' ',
                              'downloaden',
                            ),
                          ),
                        ),
                      )
                    : null;
                },
              },
              {
                key: 'getInvoiceJsLink',
                value: function() {
                  return this.props.values.licenseRequestResult
                    ? {
                        __html: '<a href="#" onclick="'.concat(
                          this.props.values.licenseRequestResult.invoiceLink,
                          ';return false;">hier</a>',
                        ),
                      }
                    : { __html: '' };
                },
              },
            ]),
            t
          );
        })(Q),
        Ee = (function(e) {
          function t(e) {
            var n;
            return (
              Object(p.a)(this, t),
              ((n = Object(m.a)(this, Object(d.a)(t).call(this, e))).prevStep = n.prevStep.bind(
                Object(f.a)(Object(f.a)(n)),
              )),
              (n.nextStep = n.nextStep.bind(Object(f.a)(Object(f.a)(n)))),
              (n.onSubmit = n.onSubmit.bind(Object(f.a)(Object(f.a)(n)))),
              n
            );
          }
          return (
            Object(h.a)(t, e),
            Object(u.a)(t, [
              {
                key: 'render',
                value: function() {
                  return a.createElement(
                    'div',
                    null,
                    a.createElement(
                      pe,
                      null,
                      a.createElement(
                        J,
                        null,
                        a.createElement(_, {
                          id: 'residentNl',
                          label: 'Woont u in Nederland?',
                          name: 'FormOptions.dutchResident',
                          form: this.props,
                          help:
                            'U woont en werkt langer dan 4 maanden in Nederland en u bent niet opgenomen in de Registratie Niet-Ingezetene (RNI).',
                        }),
                      ),
                    ),
                    this.props.values.FormOptions.dutchResident
                      ? a.createElement(
                          pe,
                          null,
                          a.createElement(
                            J,
                            null,
                            a.createElement(_, {
                              id: 'hasBsn',
                              label: 'Heeft u een BSN?',
                              name: 'FormOptions.hasBsn',
                              form: this.props,
                            }),
                          ),
                        )
                      : null,
                    this.props.values.FormOptions.isLoggedIn
                      ? null
                      : a.createElement($, { onClick: this.prevStep }),
                    a.createElement(U, {
                      onClick: this.onSubmit,
                      disabled: this.props.isSubmitting,
                    }),
                  );
                },
              },
              {
                key: 'onSubmit',
                value: function() {
                  this.validate() && this.nextStep();
                },
              },
              {
                key: 'nextStep',
                value: function() {
                  this.props.values.FormOptions.dutchResident &&
                  this.props.values.FormOptions.hasBsn
                    ? this.setStep(r.BSN)
                    : this.setStep(r.PersonalInfo);
                },
              },
              {
                key: 'prevStep',
                value: function() {
                  this.setStep(r.Login);
                },
              },
              {
                key: 'validate',
                value: function() {
                  return !0;
                },
              },
            ]),
            t
          );
        })(Q);
      function Oe(e) {
        return e
          ? [
              'image/jpeg',
              'image/jpg',
              'image/png',
              'application/pdf',
              'application/msword',
              'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            ].some(function(t) {
              return !!e && t === e.type;
            })
            ? ''
            : 'Selecteer een geldig bestand (.pdf, .doc, .docx, .jpg, .png).'
          : 'Selecteer eerst een bestand alvorens naar de volgende stap te gaan.';
      }
      var ye = (function(e) {
          function t(e) {
            var n;
            return (
              Object(p.a)(this, t),
              ((n = Object(m.a)(this, Object(d.a)(t).call(this, e))).inputRef1 = void 0),
              (n.inputRef2 = void 0),
              (n.inputRef3 = void 0),
              (n.inputRef1 = a.createRef()),
              (n.inputRef2 = a.createRef()),
              (n.inputRef3 = a.createRef()),
              (n.onFile1Change = n.onFile1Change.bind(Object(f.a)(Object(f.a)(n)))),
              (n.onFile2Change = n.onFile2Change.bind(Object(f.a)(Object(f.a)(n)))),
              (n.onFile3Change = n.onFile3Change.bind(Object(f.a)(Object(f.a)(n)))),
              (n.onFile1Click = n.onFile1Click.bind(Object(f.a)(Object(f.a)(n)))),
              (n.onFile2Click = n.onFile2Click.bind(Object(f.a)(Object(f.a)(n)))),
              (n.onFile3Click = n.onFile3Click.bind(Object(f.a)(Object(f.a)(n)))),
              (n.onSubmit = n.onSubmit.bind(Object(f.a)(Object(f.a)(n)))),
              (n.prevStep = n.prevStep.bind(Object(f.a)(Object(f.a)(n)))),
              (n.nextStep = n.nextStep.bind(Object(f.a)(Object(f.a)(n)))),
              n
            );
          }
          return (
            Object(h.a)(t, e),
            Object(u.a)(t, [
              {
                key: 'render',
                value: function() {
                  return a.createElement(
                    'div',
                    null,
                    a.createElement(
                      pe,
                      null,
                      a.createElement(
                        J,
                        null,
                        a.createElement(
                          M,
                          { type: 'info' },
                          'Upload hier uw diploma, cijferlijst en legitimatie.',
                        ),
                      ),
                    ),
                    a.createElement(
                      pe,
                      null,
                      a.createElement(
                        J,
                        null,
                        a.createElement(Y.Button, {
                          label: 'Selecteer uw diploma',
                          icon: 'pi pi-plus',
                          type: 'button',
                          className: 'p-button-secondary',
                          onClick: this.onFile1Click,
                        }),
                        a.createElement('input', {
                          name: 'file1',
                          type: 'file',
                          onChange: this.onFile1Change,
                          style: { display: 'none' },
                          ref: this.inputRef1,
                        }),
                        a.createElement(
                          'span',
                          null,
                          a.createElement(
                            'i',
                            null,
                            this.props.values.FormOptions.File1
                              ? this.props.values.FormOptions.File1.name
                              : '',
                          ),
                        ),
                        a.createElement(Z, { form: this.props, name: 'FormOptions.File1' }),
                      ),
                    ),
                    a.createElement(
                      pe,
                      null,
                      a.createElement(
                        J,
                        null,
                        a.createElement(Y.Button, {
                          label: 'Selecteer uw cijferlijst',
                          icon: 'pi pi-plus',
                          type: 'button',
                          className: 'p-button-secondary',
                          onClick: this.onFile2Click,
                        }),
                        a.createElement('input', {
                          name: 'file2',
                          type: 'file',
                          onChange: this.onFile2Change,
                          style: { display: 'none' },
                          ref: this.inputRef2,
                        }),
                        a.createElement(
                          'span',
                          null,
                          a.createElement(
                            'i',
                            null,
                            this.props.values.FormOptions.File2
                              ? this.props.values.FormOptions.File2.name
                              : '',
                          ),
                        ),
                        a.createElement(Z, { form: this.props, name: 'FormOptions.File2' }),
                      ),
                    ),
                    this.props.values.FormOptions.isLoggedIn
                      ? null
                      : a.createElement(
                          pe,
                          null,
                          a.createElement(
                            J,
                            null,
                            a.createElement(Y.Button, {
                              label: 'Selecteer uw legitimatie',
                              icon: 'pi pi-plus',
                              type: 'button',
                              className: 'p-button-secondary',
                              onClick: this.onFile3Click,
                            }),
                            a.createElement('input', {
                              name: 'file3',
                              type: 'file',
                              onChange: this.onFile3Change,
                              style: { display: 'none' },
                              ref: this.inputRef3,
                            }),
                            a.createElement(
                              'span',
                              null,
                              a.createElement(
                                'i',
                                null,
                                this.props.values.FormOptions.File3
                                  ? this.props.values.FormOptions.File3.name
                                  : '',
                              ),
                            ),
                            a.createElement(Z, { form: this.props, name: 'FormOptions.File3' }),
                          ),
                        ),
                    a.createElement(pe, null, a.createElement(J, null, '\xa0')),
                    a.createElement(
                      pe,
                      null,
                      a.createElement(
                        J,
                        null,
                        a.createElement($, { onClick: this.prevStep }),
                        a.createElement(U, { onClick: this.onSubmit }),
                      ),
                    ),
                  );
                },
              },
              {
                key: 'onFile1Click',
                value: function() {
                  this.inputRef1.current && this.inputRef1.current.click();
                },
              },
              {
                key: 'onFile2Click',
                value: function() {
                  this.inputRef2.current && this.inputRef2.current.click();
                },
              },
              {
                key: 'onFile3Click',
                value: function() {
                  this.inputRef3.current && this.inputRef3.current.click();
                },
              },
              {
                key: 'onFile1Change',
                value: function(e) {
                  this.props.setFieldValue('FormOptions.File1', e.currentTarget.files[0]);
                },
              },
              {
                key: 'onFile2Change',
                value: function(e) {
                  this.props.setFieldValue('FormOptions.File2', e.currentTarget.files[0]);
                },
              },
              {
                key: 'onFile3Change',
                value: function(e) {
                  this.props.setFieldValue('FormOptions.File3', e.currentTarget.files[0]);
                },
              },
              {
                key: 'onSubmit',
                value: function() {
                  this.validate() && this.nextStep();
                },
              },
              {
                key: 'validate',
                value: function() {
                  var e = !0,
                    t = Oe(this.props.values.FormOptions.File1);
                  this.props.setFieldError('FormOptions.File1', t), (e = e && '' === t);
                  var n = Oe(this.props.values.FormOptions.File2);
                  if (
                    (this.props.setFieldError('FormOptions.File2', n),
                    (e = e && '' === n),
                    !this.props.values.FormOptions.isLoggedIn)
                  ) {
                    var r = Oe(this.props.values.FormOptions.File3);
                    this.props.setFieldError('FormOptions.File3', r), (e = e && '' === r);
                  }
                  return e;
                },
              },
              {
                key: 'prevStep',
                value: function() {
                  this.setStep(r.ExamDate);
                },
              },
              {
                key: 'nextStep',
                value: function() {
                  this.setStep(r.Approval);
                },
              },
            ]),
            t
          );
        })(Q),
        je = (function(e) {
          function t(e) {
            var n;
            return (
              Object(p.a)(this, t),
              ((n = Object(m.a)(this, Object(d.a)(t).call(this, e))).inputRef1 = void 0),
              (n.inputRef2 = void 0),
              (n.inputRef1 = a.createRef()),
              (n.inputRef2 = a.createRef()),
              (n.onFile1Change = n.onFile1Change.bind(Object(f.a)(Object(f.a)(n)))),
              (n.onFile2Change = n.onFile2Change.bind(Object(f.a)(Object(f.a)(n)))),
              (n.onFile1Click = n.onFile1Click.bind(Object(f.a)(Object(f.a)(n)))),
              (n.onFile2Click = n.onFile2Click.bind(Object(f.a)(Object(f.a)(n)))),
              (n.onSubmit = n.onSubmit.bind(Object(f.a)(Object(f.a)(n)))),
              (n.prevStep = n.prevStep.bind(Object(f.a)(Object(f.a)(n)))),
              (n.nextStep = n.nextStep.bind(Object(f.a)(Object(f.a)(n)))),
              n
            );
          }
          return (
            Object(h.a)(t, e),
            Object(u.a)(t, [
              {
                key: 'render',
                value: function() {
                  return a.createElement(
                    'div',
                    null,
                    a.createElement(
                      pe,
                      null,
                      a.createElement(
                        J,
                        null,
                        a.createElement(
                          M,
                          { type: 'info' },
                          'Upload uw certificaat Adviseren Gewasbescherming',
                          ' ',
                          this.props.values.FormOptions.isLoggedIn ? null : 'en legitimatie',
                          '.',
                        ),
                      ),
                    ),
                    a.createElement(
                      pe,
                      null,
                      a.createElement(
                        J,
                        null,
                        a.createElement(Y.Button, {
                          label: 'Selecteer uw certificaat',
                          icon: 'pi pi-plus',
                          type: 'button',
                          className: 'p-button-secondary',
                          onClick: this.onFile1Click,
                        }),
                        a.createElement('input', {
                          name: 'file1',
                          type: 'file',
                          onChange: this.onFile1Change,
                          style: { display: 'none' },
                          ref: this.inputRef1,
                        }),
                        a.createElement(
                          'span',
                          null,
                          a.createElement(
                            'i',
                            null,
                            this.props.values.FormOptions.File1
                              ? this.props.values.FormOptions.File1.name
                              : '',
                          ),
                        ),
                        a.createElement(Z, { form: this.props, name: 'FormOptions.File1' }),
                      ),
                    ),
                    this.props.values.FormOptions.isLoggedIn
                      ? null
                      : a.createElement(
                          pe,
                          null,
                          a.createElement(
                            J,
                            null,
                            a.createElement(Y.Button, {
                              label: 'Selecteer uw legitimatie',
                              icon: 'pi pi-plus',
                              type: 'button',
                              className: 'p-button-secondary',
                              onClick: this.onFile2Click,
                            }),
                            a.createElement('input', {
                              name: 'file2',
                              type: 'file',
                              onChange: this.onFile2Change,
                              style: { display: 'none' },
                              ref: this.inputRef2,
                            }),
                            a.createElement(
                              'span',
                              null,
                              a.createElement(
                                'i',
                                null,
                                this.props.values.FormOptions.File2
                                  ? this.props.values.FormOptions.File2.name
                                  : '',
                              ),
                            ),
                            a.createElement(Z, { form: this.props, name: 'FormOptions.File2' }),
                          ),
                        ),
                    a.createElement(pe, null, a.createElement(J, null, '\xa0')),
                    a.createElement(
                      pe,
                      null,
                      a.createElement(
                        J,
                        null,
                        a.createElement($, { onClick: this.prevStep }),
                        a.createElement(U, { onClick: this.onSubmit }),
                      ),
                    ),
                  );
                },
              },
              {
                key: 'onFile1Click',
                value: function() {
                  this.inputRef1.current && this.inputRef1.current.click();
                },
              },
              {
                key: 'onFile2Click',
                value: function() {
                  this.inputRef2.current && this.inputRef2.current.click();
                },
              },
              {
                key: 'onFile1Change',
                value: function(e) {
                  this.props.setFieldValue('FormOptions.File1', e.currentTarget.files[0]);
                },
              },
              {
                key: 'onFile2Change',
                value: function(e) {
                  this.props.setFieldValue('FormOptions.File2', e.currentTarget.files[0]);
                },
              },
              {
                key: 'onSubmit',
                value: function() {
                  this.validate() && this.nextStep();
                },
              },
              {
                key: 'validate',
                value: function() {
                  var e = !0,
                    t = Oe(this.props.values.FormOptions.File1);
                  if (
                    (this.props.setFieldError('FormOptions.File1', t),
                    (e = e && '' === t),
                    !this.props.values.FormOptions.isLoggedIn)
                  ) {
                    var n = Oe(this.props.values.FormOptions.File2);
                    this.props.setFieldError('FormOptions.File2', n), (e = e && '' === n);
                  }
                  return e;
                },
              },
              {
                key: 'prevStep',
                value: function() {
                  this.setStep(r.ExamDate);
                },
              },
              {
                key: 'nextStep',
                value: function() {
                  this.setStep(r.Approval);
                },
              },
            ]),
            t
          );
        })(Q),
        ke = (function(e) {
          function t(e) {
            var n;
            return (
              Object(p.a)(this, t),
              ((n = Object(m.a)(this, Object(d.a)(t).call(this, e))).prevStep = n.prevStep.bind(
                Object(f.a)(Object(f.a)(n)),
              )),
              (n.nextStep = n.nextStep.bind(Object(f.a)(Object(f.a)(n)))),
              (n.onSubmit = n.onSubmit.bind(Object(f.a)(Object(f.a)(n)))),
              n
            );
          }
          return (
            Object(h.a)(t, e),
            Object(u.a)(t, [
              {
                key: 'render',
                value: function() {
                  return a.createElement(
                    'div',
                    null,
                    a.createElement(
                      pe,
                      null,
                      a.createElement(
                        J,
                        null,
                        a.createElement(
                          M,
                          { type: 'info' },
                          this.props.values.FormOptions.isLoggedIn
                            ? 'Controleer of uw e-mailadres nog actief en correct is.'
                            : 'Vul uw e-mailadres in.',
                        ),
                      ),
                    ),
                    a.createElement(ce, {
                      id: 'email',
                      label: 'E-mail',
                      keyfilter: 'email',
                      placeholder: 'E-mailadres',
                      name: 'Persoon.Contactgegevens.Email',
                      form: this.props,
                    }),
                    this.props.values.FormOptions.isLoggedIn
                      ? null
                      : a.createElement($, { onClick: this.prevStep }),
                    a.createElement(U, {
                      onClick: this.onSubmit,
                      disabled: this.props.isSubmitting,
                    }),
                  );
                },
              },
              {
                key: 'onSubmit',
                value: function() {
                  this.validate() && this.nextStep();
                },
              },
              {
                key: 'validate',
                value: function() {
                  return se(this.props, 'Persoon.Contactgegevens.Email');
                },
              },
              {
                key: 'prevStep',
                value: function() {
                  this.setStep(
                    this.props.values.FormOptions.dutchResident &&
                    this.props.values.FormOptions.hasBsn
                      ? r.BSN
                      : r.PersonalInfo,
                  );
                },
              },
              {
                key: 'nextStep',
                value: function() {
                  this.setStep(r.PreEducationOption);
                },
              },
            ]),
            t
          );
        })(Q),
        Fe = (function(e) {
          function t(e) {
            var n;
            return (
              Object(p.a)(this, t),
              ((n = Object(m.a)(this, Object(d.a)(t).call(this, e))).onSubmit = n.onSubmit.bind(
                Object(f.a)(Object(f.a)(n)),
              )),
              (n.prevStep = n.prevStep.bind(Object(f.a)(Object(f.a)(n)))),
              (n.nextStep = n.nextStep.bind(Object(f.a)(Object(f.a)(n)))),
              n
            );
          }
          return (
            Object(h.a)(t, e),
            Object(u.a)(t, [
              {
                key: 'render',
                value: function() {
                  return a.createElement(
                    'div',
                    null,
                    a.createElement(
                      pe,
                      null,
                      a.createElement(
                        J,
                        null,
                        a.createElement(
                          M,
                          { type: 'info' },
                          'Geef aan wanneer uw examen behaald is.',
                          ' ',
                          this.props.values.FormOptions.Vooropleiding &&
                          '30.02' === this.props.values.FormOptions.Vooropleiding.Code
                            ? 'De datum moet tussen 1 januari 2019 en vandaag liggen.'
                            : 'De datum moet liggen tussen vandaag en maximaal 5 jaar in het verleden.',
                        ),
                      ),
                    ),
                    a.createElement(he, {
                      id: 'examDate',
                      label: 'Datum examen behaald',
                      name: 'FormOptions.ExamDate',
                      placeholder: 'dd-mm-jjjj',
                      form: this.props,
                    }),
                    a.createElement($, { onClick: this.prevStep }),
                    a.createElement(U, {
                      onClick: this.onSubmit,
                      disabled: this.props.isSubmitting,
                    }),
                  );
                },
              },
              {
                key: 'onSubmit',
                value: function() {
                  this.validate() && this.nextStep();
                },
              },
              {
                key: 'validate',
                value: function() {
                  return se(this.props, 'FormOptions.ExamDate');
                },
              },
              {
                key: 'prevStep',
                value: function() {
                  this.setStep(r.PreEducationOption);
                },
              },
              {
                key: 'nextStep',
                value: function() {
                  this.setStep(
                    this.props.values.FormOptions.Vooropleiding &&
                    ['30.02', '30.03'].indexOf(this.props.values.FormOptions.Vooropleiding.Code) >
                      -1
                      ? r.DocumentAG
                      : r.Document,
                  );
                },
              },
            ]),
            t
          );
        })(Q),
        Ce = (function(e) {
          function t(e) {
            var n;
            return (
              Object(p.a)(this, t),
              ((n = Object(m.a)(this, Object(d.a)(t).call(this, e))).onSubmit = n.onSubmit.bind(
                Object(f.a)(Object(f.a)(n)),
              )),
              n
            );
          }
          return (
            Object(h.a)(t, e),
            Object(u.a)(t, [
              {
                key: 'componentDidMount',
                value: function() {
                  this.props.values.FormOptions.isLoggedIn && this.setStep(r.Email);
                },
              },
              {
                key: 'render',
                value: function() {
                  return a.createElement(
                    'div',
                    null,
                    a.createElement(
                      pe,
                      null,
                      a.createElement(
                        J,
                        null,
                        a.createElement(_, {
                          id: 'hasAccount',
                          label: 'Heeft u een inlog account?',
                          name: 'FormOptions.hasAccount',
                          form: this.props,
                          help: 'Vink aan als u al een account bij Bureau Erkenningen heeft.',
                        }),
                      ),
                    ),
                    a.createElement(U, {
                      onClick: this.onSubmit,
                      disabled: this.props.isSubmitting,
                    }),
                  );
                },
              },
              {
                key: 'onSubmit',
                value: function() {
                  this.props.values.FormOptions.hasAccount
                    ? (window.location.href =
                        '/Default.aspx?tabid=154&returnurl=%2fDefault.aspx%3ftabid%3d293')
                    : this.setStep(
                        this.props.values.FormOptions.isLoggedIn ? r.Email : r.CountryCheck,
                      );
                },
              },
            ]),
            t
          );
        })(Q),
        Se = n(210),
        Pe = (function(e) {
          function t(e) {
            return Object(p.a)(this, t), Object(m.a)(this, Object(d.a)(t).call(this, e));
          }
          return (
            Object(h.a)(t, e),
            Object(u.a)(t, [
              {
                key: 'render',
                value: function() {
                  var e = this;
                  return a.createElement(
                    Z,
                    {
                      label: this.props.label,
                      for: this.props.id,
                      form: this.props.form,
                      name: this.props.name,
                    },
                    this.props.loading
                      ? a.createElement('span', null, a.createElement(z, null))
                      : a.createElement(Se.Dropdown, {
                          id: this.props.id,
                          options: this.props.options,
                          placeholder: this.props.placeholder || this.props.label,
                          value: this.getFormValue(),
                          onChange: function(t) {
                            e.props.form &&
                              e.props.name &&
                              (e.props.form.setFieldValue(e.props.name, t.value),
                              e.props.form.setFieldTouched(e.props.name, !0),
                              se(e.props.form, e.props.name, t.value)),
                              e.props.onChange && e.props.onChange(t);
                          },
                          disabled: this.props.readonly,
                          className: 'w-100',
                          filter: this.props.filter,
                          style: { maxWidth: '100%' },
                        }),
                  );
                },
              },
              {
                key: 'getFormValue',
                value: function() {
                  if (this.props.value) return this.props.value;
                  if (this.props.form && this.props.name) {
                    var e = this.props.name.split('.'),
                      t = this.props.form.values,
                      n = !0,
                      r = !1,
                      a = void 0;
                    try {
                      for (var o, l = e[Symbol.iterator](); !(n = (o = l.next()).done); n = !0) {
                        t = t[o.value];
                      }
                    } catch (i) {
                      (r = !0), (a = i);
                    } finally {
                      try {
                        n || null == l.return || l.return();
                      } finally {
                        if (r) throw a;
                      }
                    }
                    return t;
                  }
                },
              },
            ]),
            t
          );
        })(a.Component),
        De = (function(e) {
          function t() {
            return Object(p.a)(this, t), Object(m.a)(this, Object(d.a)(t).apply(this, arguments));
          }
          return (
            Object(h.a)(t, e),
            Object(u.a)(t, [
              {
                key: 'render',
                value: function() {
                  var e = this;
                  return a.createElement(c.c, { query: this.props.query }, function(t) {
                    var n = t.loading,
                      r = t.error,
                      o = t.data;
                    t.refetch;
                    if (r)
                      return a.createElement(
                        M,
                        null,
                        'Ophalen van gegevens mislukt. Probeer het nog een keer of neem contact op met de helpdesk.',
                      );
                    var l = o[e.props.queryKey],
                      i =
                        (l &&
                          l.map(function(t) {
                            return {
                              label: e.props.labelKey ? t[e.props.labelKey] : t.Text,
                              value: e.props.itemAsValue
                                ? t
                                : e.props.valueKey
                                  ? t[e.props.valueKey]
                                  : t.Value,
                            };
                          })) ||
                        [],
                      s = Object(v.a)({}, e.props, { options: i, loading: n });
                    return a.createElement(Pe, s);
                  });
                },
              },
              {
                key: 'shouldComponentUpdate',
                value: function(e, t) {
                  var n = !(
                    this.props.form &&
                    this.props.form.errors &&
                    e.form &&
                    e.form.errors &&
                    JSON.stringify(this.props.form.errors) === JSON.stringify(e.form.errors)
                  );
                  return this.getFormValue(this.props) !== this.getFormValue(e) || n;
                },
              },
              {
                key: 'getFormValue',
                value: function(e) {
                  if (e.value) return e.value;
                  if (e.form && e.name) {
                    var t = e.name.split('.'),
                      n = e.form.values,
                      r = !0,
                      a = !1,
                      o = void 0;
                    try {
                      for (var l, i = t[Symbol.iterator](); !(r = (l = i.next()).done); r = !0) {
                        n = n[l.value];
                      }
                    } catch (s) {
                      (a = !0), (o = s);
                    } finally {
                      try {
                        r || null == i.return || i.return();
                      } finally {
                        if (a) throw o;
                      }
                    }
                    return n;
                  }
                },
              },
            ]),
            t
          );
        })(a.Component),
        Be = (function(e) {
          function t(e) {
            var n;
            return (
              Object(p.a)(this, t),
              ((n = Object(m.a)(this, Object(d.a)(t).call(this, e))).onSubmit = n.onSubmit.bind(
                Object(f.a)(Object(f.a)(n)),
              )),
              (n.prevStep = n.prevStep.bind(Object(f.a)(Object(f.a)(n)))),
              (n.nextStep = n.nextStep.bind(Object(f.a)(Object(f.a)(n)))),
              n
            );
          }
          return (
            Object(h.a)(t, e),
            Object(u.a)(t, [
              {
                key: 'render',
                value: function() {
                  return a.createElement(
                    'div',
                    null,
                    a.createElement(
                      pe,
                      null,
                      a.createElement(
                        J,
                        null,
                        a.createElement(
                          M,
                          { type: 'info' },
                          this.props.values.FormOptions.hasAccount
                            ? 'Controleer uw gegevens en corrigeer indien nodig.'
                            : 'Vul uw gegevens in',
                        ),
                      ),
                    ),
                    a.createElement(
                      pe,
                      null,
                      a.createElement(
                        J,
                        null,
                        a.createElement(ce, {
                          id: 'initials',
                          label: 'Voorletters',
                          placeholder: 'Voorletters (A.B.C.)',
                          name: 'Persoon.Voorletters',
                          readonly: this.props.values.Persoon.IsGbaGeregistreerd,
                          form: this.props,
                        }),
                        a.createElement(ce, {
                          id: 'insertion',
                          label: 'Tussenvoegsel',
                          placeholder: 'Tussenvoegsel',
                          name: 'Persoon.Tussenvoegsel',
                          readonly: this.props.values.Persoon.IsGbaGeregistreerd,
                          form: this.props,
                        }),
                        a.createElement(ce, {
                          id: 'surname',
                          label: 'Achternaam',
                          placeholder: 'Achternaam',
                          name: 'Persoon.Achternaam',
                          readonly: this.props.values.Persoon.IsGbaGeregistreerd,
                          form: this.props,
                        }),
                        a.createElement(he, {
                          id: 'birthDate',
                          label: 'Geboortedatum',
                          name: 'Persoon.Geboortedatum',
                          readonly: this.props.values.Persoon.IsGbaGeregistreerd,
                          form: this.props,
                          placeholder: 'dd-mm-jjjj',
                        }),
                      ),
                      a.createElement(
                        J,
                        null,
                        a.createElement(ce, {
                          id: 'street',
                          label: 'Straatnaam',
                          placeholder: 'Straatnaam',
                          name: 'Persoon.Contactgegevens.Adresregel1',
                          readonly: this.props.values.Persoon.IsGbaGeregistreerd,
                          form: this.props,
                        }),
                        a.createElement(ce, {
                          id: 'houseNumber',
                          label: 'Huisnummer',
                          keyfilter: 'pint',
                          placeholder: 'Huisnummer (cijfer)',
                          name: 'Persoon.Contactgegevens.Huisnummer',
                          readonly: this.props.values.Persoon.IsGbaGeregistreerd,
                          form: this.props,
                        }),
                        a.createElement(ce, {
                          id: 'houseNumberAdd',
                          label: 'Huisnummer toevoeging',
                          keyfilter: 'alphanum',
                          placeholder: 'Toevoeging',
                          name: 'Persoon.Contactgegevens.HuisnummerToevoeging',
                          readonly: this.props.values.Persoon.IsGbaGeregistreerd,
                          form: this.props,
                        }),
                        a.createElement(ce, {
                          id: 'extraAddressInfo',
                          label: 'Tweede adresregel',
                          name: 'Persoon.Contactgegevens.Adresregel2',
                          readonly: this.props.values.Persoon.IsGbaGeregistreerd,
                          form: this.props,
                        }),
                        this.props.values.Persoon.IsGbaGeregistreerd
                          ? null
                          : a.createElement(De, {
                              id: 'country',
                              label: 'Land',
                              query: V,
                              queryKey: 'Landen',
                              name: 'Persoon.Contactgegevens.Land',
                              readonly: this.props.values.Persoon.IsGbaGeregistreerd,
                              filter: !0,
                              form: this.props,
                            }),
                        a.createElement(ce, {
                          id: 'zipCode',
                          label: 'Postcode',
                          placeholder:
                            'Nederland' !== this.props.values.Persoon.Contactgegevens.Land
                              ? 'Postcode'
                              : '1234 AB',
                          name: 'Persoon.Contactgegevens.Postcode',
                          readonly: this.props.values.Persoon.IsGbaGeregistreerd,
                          form: this.props,
                        }),
                        a.createElement(ce, {
                          id: 'city',
                          label: 'Woonplaats',
                          placeholder: 'Woonplaats',
                          name: 'Persoon.Contactgegevens.Woonplaats',
                          readonly: this.props.values.Persoon.IsGbaGeregistreerd,
                          form: this.props,
                        }),
                        this.props.values.Persoon.IsGbaGeregistreerd
                          ? null
                          : a.createElement(De, {
                              id: 'nationality',
                              label: 'Nationaliteit',
                              query: A,
                              queryKey: 'Nationaliteiten',
                              name: 'Persoon.Nationaliteit',
                              readonly: this.props.values.Persoon.IsGbaGeregistreerd,
                              filter: !0,
                              form: this.props,
                            }),
                      ),
                    ),
                    a.createElement(
                      pe,
                      null,
                      a.createElement(
                        J,
                        null,
                        a.createElement('p', null, 'U maakt uw aanvraag pas verderop definitief.'),
                        a.createElement($, { onClick: this.prevStep }),
                        a.createElement(U, { onClick: this.onSubmit }),
                      ),
                    ),
                  );
                },
              },
              {
                key: 'onSubmit',
                value: function() {
                  this.validate() && this.nextStep();
                },
              },
              {
                key: 'validate',
                value: function() {
                  var e = !0;
                  return (
                    (e = se(this.props, 'Persoon.Voorletters') && e),
                    (e = se(this.props, 'Persoon.Achternaam') && e),
                    (e = se(this.props, 'Persoon.Geboortedatum') && e),
                    (e = se(this.props, 'Persoon.Contactgegevens.Adresregel1') && e),
                    (e = se(this.props, 'Persoon.Contactgegevens.Huisnummer') && e),
                    (e = se(this.props, 'Persoon.Contactgegevens.Postcode') && e),
                    (e = se(this.props, 'Persoon.Contactgegevens.Woonplaats') && e)
                  );
                },
              },
              {
                key: 'prevStep',
                value: function() {
                  this.setStep(r.CountryCheck);
                },
              },
              {
                key: 'nextStep',
                value: function() {
                  this.setStep(r.Email);
                },
              },
            ]),
            t
          );
        })(Q),
        Ne = (function(e) {
          function t(e) {
            var n;
            return (
              Object(p.a)(this, t),
              ((n = Object(m.a)(this, Object(d.a)(t).call(this, e))).onSubmit = n.onSubmit.bind(
                Object(f.a)(Object(f.a)(n)),
              )),
              (n.prevStep = n.prevStep.bind(Object(f.a)(Object(f.a)(n)))),
              (n.nextStep = n.nextStep.bind(Object(f.a)(Object(f.a)(n)))),
              (n.onCategoryChange = n.onCategoryChange.bind(Object(f.a)(Object(f.a)(n)))),
              (n.onPreEducationChange = n.onPreEducationChange.bind(Object(f.a)(Object(f.a)(n)))),
              (n.filterPreEducationsByCategory = n.filterPreEducationsByCategory.bind(
                Object(f.a)(Object(f.a)(n)),
              )),
              n
            );
          }
          return (
            Object(h.a)(t, e),
            Object(u.a)(t, [
              {
                key: 'render',
                value: function() {
                  var e = this;
                  return a.createElement(
                    'div',
                    null,
                    a.createElement(c.c, { query: G }, function(t) {
                      var n = t.loading,
                        r = t.error,
                        o = t.data;
                      t.refetch;
                      if (r)
                        return a.createElement(
                          M,
                          null,
                          'Ophalen van gegevens mislukt. Probeer het nog een keer of neem contact op met de helpdesk.',
                        );
                      var l = o.preEducationCategories,
                        i =
                          (l &&
                            l.map(function(e) {
                              return { label: e.Naam, value: e };
                            })) ||
                          [];
                      return a.createElement(
                        pe,
                        null,
                        a.createElement(
                          J,
                          null,
                          ' ',
                          a.createElement(Pe, {
                            id: 'preEducationCategory',
                            label: 'Selecteer opleidingsland',
                            name: 'FormOptions.VooropleidingCategorie',
                            options: i,
                            filter: !0,
                            form: e.props,
                            loading: n,
                            onChange: e.onCategoryChange,
                          }),
                        ),
                      );
                    }),
                    a.createElement(c.c, { query: L }, function(t) {
                      var n = t.loading,
                        r = t.error,
                        o = t.data;
                      t.refetch;
                      if (r)
                        return a.createElement(
                          M,
                          null,
                          'Ophalen van gegevens mislukt. Probeer het nog een keer of neem contact op met de helpdesk.',
                        );
                      if (!e.props.values.FormOptions.VooropleidingCategorie) return null;
                      var l = o.Vooropleidingen,
                        i =
                          e.props.values.FormOptions.VooropleidingCategorie && l
                            ? l
                                .filter(function(t) {
                                  return (
                                    e.props.values.FormOptions.VooropleidingCategorie &&
                                    t.Categorie.VooropleidingCategorieID ===
                                      e.props.values.FormOptions.VooropleidingCategorie
                                        .VooropleidingCategorieID &&
                                    '30.01' !== t.Code
                                  );
                                })
                                .map(function(e) {
                                  return {
                                    label: ''.concat(e.Code, ' | ').concat(e.Naam),
                                    value: e,
                                  };
                                })
                            : [];
                      return a.createElement(
                        pe,
                        null,
                        a.createElement(
                          J,
                          null,
                          ' ',
                          a.createElement(Pe, {
                            id: 'preEducation',
                            label: 'Selecteer vooropleiding',
                            name: 'FormOptions.Vooropleiding',
                            options: i,
                            filter: !0,
                            form: e.props,
                            loading: n,
                            onChange: e.onPreEducationChange,
                          }),
                        ),
                      );
                    }),
                    this.props.values.FormOptions.Vooropleiding
                      ? a.createElement(
                          c.c,
                          {
                            query: R,
                            variables: { code: this.props.values.FormOptions.Vooropleiding.Code },
                          },
                          function(t) {
                            var n = t.loading,
                              r = t.error,
                              o = t.data;
                            t.refetch;
                            if (r)
                              return a.createElement(
                                M,
                                null,
                                'Ophalen van gegevens mislukt. Probeer het nog een keer of neem contact op met de helpdesk.',
                              );
                            var l = o.certificatesByPreEducation,
                              i = l
                                ? l.map(function(e) {
                                    return { label: e.Naam, value: e };
                                  })
                                : [];
                            return a.createElement(
                              pe,
                              null,
                              a.createElement(
                                J,
                                null,
                                ' ',
                                a.createElement(Pe, {
                                  id: 'certificate',
                                  label: 'Selecteer gewenste certificering',
                                  name: 'FormOptions.Certificaat',
                                  options: i,
                                  filter: !0,
                                  form: e.props,
                                  loading: n,
                                }),
                              ),
                            );
                          },
                        )
                      : null,
                    a.createElement($, { onClick: this.prevStep }),
                    a.createElement(U, {
                      onClick: this.onSubmit,
                      disabled: this.props.isSubmitting,
                    }),
                  );
                },
              },
              {
                key: 'filterPreEducationsByCategory',
                value: function(e) {
                  return (
                    !!this.props.values.FormOptions.VooropleidingCategorie &&
                    e.Categorie.VooropleidingCategorieID ===
                      this.props.values.FormOptions.VooropleidingCategorie.VooropleidingCategorieID
                  );
                },
              },
              {
                key: 'onCategoryChange',
                value: function() {
                  this.props.setFieldValue('FormOptions.Vooropleiding', '');
                },
              },
              {
                key: 'onPreEducationChange',
                value: function() {
                  this.props.setFieldValue('FormOptions.Certificaat', '');
                },
              },
              {
                key: 'onSubmit',
                value: function() {
                  this.validate() && this.nextStep();
                },
              },
              {
                key: 'validate',
                value: function() {
                  var e = !0;
                  return (e =
                    (e =
                      (e = e && se(this.props, 'FormOptions.VooropleidingCategorie')) &&
                      se(this.props, 'FormOptions.Vooropleiding')) &&
                    se(this.props, 'FormOptions.Certificaat'));
                },
              },
              {
                key: 'prevStep',
                value: function() {
                  this.setStep(r.Email);
                },
              },
              {
                key: 'nextStep',
                value: function() {
                  this.setStep(r.ExamDate);
                },
              },
            ]),
            t
          );
        })(Q),
        we = (function(e) {
          function t(e) {
            var n;
            return (
              Object(p.a)(this, t),
              ((n = Object(m.a)(this, Object(d.a)(t).call(this, e))).prevStep = n.prevStep.bind(
                Object(f.a)(Object(f.a)(n)),
              )),
              n
            );
          }
          return (
            Object(h.a)(t, e),
            Object(u.a)(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props.values;
                  return a.createElement(
                    'div',
                    null,
                    a.createElement(
                      pe,
                      null,
                      a.createElement(
                        J,
                        null,
                        a.createElement(
                          M,
                          { type: 'info' },
                          'Bevestig de aanvraag door op de knop Afronden te klikken. U ziet dan de aanvraag en er wordt ook een factuur aangemaakt die u kunt betalen met iDeal. Daarnaast ontvangt u een e-mail met de door u ingediende gegevens.',
                          e.FormOptions.isLoggedIn
                            ? null
                            : a.createElement(
                                'span',
                                null,
                                a.createElement('br', null),
                                a.createElement('br', null),
                                'Uw inloggegevens worden per e-mail verstuurd.',
                              ),
                        ),
                      ),
                    ),
                    a.createElement(
                      pe,
                      null,
                      a.createElement(
                        J,
                        { className: 'col-xs-6 row-spacer' },
                        a.createElement('h4', null, 'Persoonsgegevens'),
                        e.FormOptions.hasBsn
                          ? null
                          : a.createElement(
                              'div',
                              null,
                              a.createElement(
                                pe,
                                null,
                                a.createElement(J, null, a.createElement('b', null, 'Naam')),
                                a.createElement(
                                  J,
                                  null,
                                  e.Persoon.Voorletters,
                                  ' ',
                                  e.Persoon.Tussenvoegsel,
                                  ' ',
                                  e.Persoon.Achternaam,
                                ),
                              ),
                              a.createElement(
                                pe,
                                null,
                                a.createElement(J, null, a.createElement('b', null, 'Adres')),
                                a.createElement(
                                  J,
                                  null,
                                  e.Persoon.Contactgegevens.Adresregel1,
                                  ' ',
                                  e.Persoon.Contactgegevens.Huisnummer,
                                  ' ',
                                  e.Persoon.Contactgegevens.HuisnummerToevoeging,
                                  a.createElement('br', null),
                                  e.Persoon.Contactgegevens.Adresregel2
                                    ? a.createElement(
                                        'span',
                                        null,
                                        e.Persoon.Contactgegevens.Adresregel2,
                                        a.createElement('br', null),
                                      )
                                    : null,
                                  e.Persoon.Contactgegevens.Postcode,
                                  '\xa0\xa0',
                                  e.Persoon.Contactgegevens.Woonplaats,
                                  a.createElement('br', null),
                                  e.Persoon.Contactgegevens.Land,
                                ),
                              ),
                              a.createElement(
                                pe,
                                null,
                                a.createElement(
                                  J,
                                  null,
                                  a.createElement('b', null, 'Nationaliteit'),
                                ),
                                a.createElement(J, null, e.Persoon.Nationaliteit),
                              ),
                            ),
                        a.createElement(
                          pe,
                          null,
                          a.createElement(J, null, a.createElement('b', null, 'Geboortedatum')),
                          a.createElement(
                            J,
                            null,
                            e.Persoon.Geboortedatum
                              ? a.createElement(
                                  ve.a,
                                  { format: 'DD-MM-YYYY' },
                                  e.Persoon.Geboortedatum.toISOString(),
                                )
                              : null,
                          ),
                        ),
                        e.FormOptions.hasBsn && e.Persoon.BSN
                          ? a.createElement(
                              pe,
                              null,
                              a.createElement(J, null, a.createElement('b', null, 'BSN')),
                              a.createElement(J, null, e.Persoon.BSN),
                            )
                          : null,
                        a.createElement(
                          pe,
                          null,
                          a.createElement(J, null, a.createElement('b', null, 'E-mail')),
                          a.createElement(J, null, e.Persoon.Contactgegevens.Email),
                        ),
                      ),
                      a.createElement(
                        J,
                        { className: 'col-xs-6 row-spacer' },
                        a.createElement('h4', null, 'Certificering'),
                        e.FormOptions.Vooropleiding
                          ? a.createElement(
                              'div',
                              null,
                              a.createElement(
                                pe,
                                null,
                                a.createElement(
                                  J,
                                  null,
                                  a.createElement('b', null, 'Vooropleiding'),
                                ),
                                a.createElement(J, null, e.FormOptions.Vooropleiding.Naam),
                              ),
                              a.createElement(
                                pe,
                                null,
                                a.createElement(
                                  J,
                                  null,
                                  a.createElement('b', null, 'Datum examen behaald'),
                                ),
                                a.createElement(
                                  J,
                                  null,
                                  e.FormOptions.ExamDate
                                    ? a.createElement(
                                        ve.a,
                                        { format: 'DD-MM-YYYY' },
                                        e.FormOptions.ExamDate.toISOString(),
                                      )
                                    : null,
                                ),
                              ),
                            )
                          : null,
                        a.createElement(
                          pe,
                          null,
                          a.createElement(J, null, a.createElement('b', null, 'Nieuwe licentie')),
                          a.createElement(
                            J,
                            null,
                            e.FormOptions.Certificaat ? e.FormOptions.Certificaat.Naam : '',
                          ),
                        ),
                        this.isAG()
                          ? a.createElement(
                              'div',
                              null,
                              a.createElement(
                                pe,
                                null,
                                a.createElement(
                                  J,
                                  null,
                                  a.createElement(
                                    'b',
                                    null,
                                    'Certificaat Adviseren Gewasbescherming',
                                  ),
                                ),
                                a.createElement(
                                  J,
                                  null,
                                  a.createElement(
                                    'i',
                                    null,
                                    e.FormOptions.File1 ? e.FormOptions.File1.name : '',
                                  ),
                                ),
                              ),
                              this.props.values.FormOptions.isLoggedIn
                                ? null
                                : a.createElement(
                                    pe,
                                    null,
                                    a.createElement(
                                      J,
                                      null,
                                      a.createElement('b', null, 'Legitimatie'),
                                    ),
                                    a.createElement(
                                      J,
                                      null,
                                      a.createElement(
                                        'i',
                                        null,
                                        e.FormOptions.File2 ? e.FormOptions.File2.name : '',
                                      ),
                                    ),
                                  ),
                            )
                          : a.createElement(
                              'div',
                              null,
                              a.createElement(
                                pe,
                                null,
                                a.createElement(J, null, a.createElement('b', null, 'Diploma')),
                                a.createElement(
                                  J,
                                  null,
                                  a.createElement(
                                    'i',
                                    null,
                                    e.FormOptions.File1 ? e.FormOptions.File1.name : '',
                                  ),
                                ),
                              ),
                              a.createElement(
                                pe,
                                null,
                                a.createElement(J, null, a.createElement('b', null, 'Cijferlijst')),
                                a.createElement(
                                  J,
                                  null,
                                  a.createElement(
                                    'i',
                                    null,
                                    e.FormOptions.File2 ? e.FormOptions.File2.name : '',
                                  ),
                                ),
                              ),
                              this.props.values.FormOptions.isLoggedIn
                                ? null
                                : a.createElement(
                                    pe,
                                    null,
                                    a.createElement(
                                      J,
                                      null,
                                      a.createElement('b', null, 'Legitimatie'),
                                    ),
                                    a.createElement(
                                      J,
                                      null,
                                      a.createElement(
                                        'i',
                                        null,
                                        e.FormOptions.File3 ? e.FormOptions.File3.name : '',
                                      ),
                                    ),
                                  ),
                            ),
                        e.FormOptions.Remarks
                          ? a.createElement(
                              pe,
                              null,
                              a.createElement(J, null, a.createElement('b', null, 'Opmerkingen')),
                              a.createElement(J, null, e.FormOptions.Remarks),
                            )
                          : null,
                        a.createElement(
                          pe,
                          null,
                          a.createElement(J, null, a.createElement('b', null, 'Kosten')),
                          a.createElement(
                            J,
                            null,
                            a.createElement(c.c, { query: q }, function(e) {
                              return e.loading
                                ? a.createElement('span', null, a.createElement(z, null))
                                : e.error
                                  ? a.createElement('span', null, '?')
                                  : a.createElement(
                                      'span',
                                      null,
                                      e.data.tariefByCertificaatCode.TotaalExtBtw || '?',
                                      ' ',
                                      'Euro (excl. btw)',
                                    );
                            }),
                          ),
                        ),
                      ),
                    ),
                    a.createElement(pe, null, a.createElement(J, null, '\xa0')),
                    a.createElement(
                      pe,
                      null,
                      a.createElement(
                        J,
                        null,
                        a.createElement($, {
                          disabled: this.props.isSubmitting,
                          onClick: this.prevStep,
                        }),
                        a.createElement(U, {
                          label: 'Afronden',
                          disabled: this.props.isSubmitting,
                          icon: this.props.isSubmitting ? 'pi pi-spin pi-spinner' : 'pi pi-check',
                          onClick: this.props.submitForm,
                        }),
                      ),
                    ),
                    this.props.isSubmitting
                      ? a.createElement(
                          'div',
                          null,
                          a.createElement(pe, null, a.createElement(J, null, '\xa0')),
                          a.createElement(
                            pe,
                            null,
                            a.createElement(
                              J,
                              null,
                              a.createElement(
                                M,
                                { type: 'warning' },
                                'Let op, het verwerken van de aanvraag kan even duren. Even geduld a.u.b.',
                              ),
                            ),
                          ),
                        )
                      : null,
                  );
                },
              },
              {
                key: 'isAG',
                value: function() {
                  return (
                    void 0 !== this.props.values.FormOptions.Vooropleiding &&
                    -1 !==
                      ['30.02', '30.03'].indexOf(this.props.values.FormOptions.Vooropleiding.Code)
                  );
                },
              },
              {
                key: 'prevStep',
                value: function() {
                  this.setStep(r.Approval);
                },
              },
            ]),
            t
          );
        })(Q),
        Ie = (function(e) {
          function t(e) {
            var n;
            return (
              Object(p.a)(this, t),
              ((n = Object(m.a)(this, Object(d.a)(t).call(this, e))).state = {
                currentStep: r.Login,
                hasSubmitError: !1,
              }),
              (n.setStep = n.setStep.bind(Object(f.a)(Object(f.a)(n)))),
              (n.onSubmit = n.onSubmit.bind(Object(f.a)(Object(f.a)(n)))),
              (n.formRender = n.formRender.bind(Object(f.a)(Object(f.a)(n)))),
              n
            );
          }
          return (
            Object(h.a)(t, e),
            Object(u.a)(t, [
              {
                key: 'render',
                value: function() {
                  var e = this;
                  return a.createElement(c.b, { mutation: F }, function(t) {
                    var n = function(n, r) {
                      e.onSubmit(n, t, r);
                    };
                    return a.createElement(
                      'div',
                      { className: 'row justify-content-start' },
                      a.createElement(
                        'div',
                        { className: 'col' },
                        a.createElement(c.c, { query: T }, function(t) {
                          var r = t.loading,
                            o = t.error,
                            l = t.data;
                          if (r) return a.createElement('p', null, a.createElement(z, null));
                          if (o) {
                            var i = !0;
                            if (o.graphQLErrors) {
                              var s = !0,
                                c = !1,
                                p = void 0;
                              try {
                                for (
                                  var u, m = o.graphQLErrors[Symbol.iterator]();
                                  !(s = (u = m.next()).done);
                                  s = !0
                                ) {
                                  var d = u.value;
                                  d.extensions &&
                                    'UNAUTHENTICATED' !== d.extensions.code &&
                                    (i = !1);
                                }
                              } catch (d) {
                                (c = !0), (p = d);
                              } finally {
                                try {
                                  s || null == m.return || m.return();
                                } finally {
                                  if (c) throw p;
                                }
                              }
                            }
                            if (!i)
                              return a.createElement(
                                M,
                                { type: 'danger' },
                                'Er is een fout opgetreden bij het ophalen van de accountgegevens. Probeer het nog een keer of neem contact op met de helpdesk.',
                              );
                          }
                          var h = {
                            Persoon: {
                              PersoonID: 0,
                              Voorletters: '',
                              Tussenvoegsel: '',
                              Achternaam: '',
                              Geslacht: 'o',
                              Nationaliteit: 'Nederlandse',
                              IsGbaGeregistreerd: !1,
                              Contactgegevens: {
                                ContactgegevensID: 0,
                                Adresregel1: '',
                                Adresregel2: '',
                                Huisnummer: '',
                                HuisnummerToevoeging: '',
                                Postcode: '',
                                Woonplaats: '',
                                Land: 'Nederland',
                                Email: '',
                              },
                            },
                            Certificeringen: [],
                            FormOptions: {
                              hasAccount: !1,
                              isLoggedIn: !1,
                              dutchResident: !1,
                              hasBsn: !1,
                              Remarks: '',
                              Approved: !1,
                              Costs: 0,
                            },
                            onStep: e.setStep,
                          };
                          return (
                            l &&
                              l.my &&
                              (h = Object(v.a)({}, h, l.my, {
                                Persoon: Object(v.a)({}, l.my.Persoon, {
                                  Geboortedatum: new Date(l.my.Persoon.Geboortedatum),
                                  BSN:
                                    '0' === l.my.Persoon.BSN ? null : parseInt(l.my.Persoon.BSN, 0),
                                }),
                                FormOptions: Object(v.a)({}, h.FormOptions, {
                                  AchternaamBSN: l.my.Persoon.Achternaam,
                                  isLoggedIn: !0,
                                }),
                              })),
                            a.createElement(H.a, {
                              initialValues: h,
                              onSubmit: n,
                              render: e.formRender,
                              validateOnBlur: !1,
                              validateOnChange: !1,
                            })
                          );
                        }),
                      ),
                    );
                  });
                },
              },
              {
                key: 'formRender',
                value: function(e) {
                  return a.createElement(
                    'form',
                    { className: 'form form-horizontal', onSubmit: this.handleSubmit },
                    this.state.hasSubmitError
                      ? a.createElement(
                          M,
                          { type: 'danger' },
                          'Er is een fout opgetreden bij het verwerken van de aanvraag. Controleer uw invoer en probeer het nog een keer of neem contact op met de helpdesk.',
                        )
                      : null,
                    this.state.currentStep === r.Login
                      ? a.createElement(W, { title: 'Login account' }, a.createElement(Ce, e))
                      : null,
                    this.state.currentStep === r.CountryCheck
                      ? a.createElement(W, { title: 'Land controle' }, a.createElement(Ee, e))
                      : null,
                    this.state.currentStep === r.PersonalInfo
                      ? a.createElement(W, { title: 'Uw persoonsgegevens' }, a.createElement(Be, e))
                      : null,
                    this.state.currentStep === r.Email
                      ? a.createElement(W, { title: 'Uw e-mailadres' }, a.createElement(ke, e))
                      : null,
                    this.state.currentStep === r.ExamDate
                      ? a.createElement(
                          W,
                          { title: 'Datum examen behaald' },
                          a.createElement(Fe, e),
                        )
                      : null,
                    this.state.currentStep === r.PreEducationOption
                      ? a.createElement(
                          W,
                          { title: 'Vooropleiding en certificering' },
                          a.createElement(Ne, e),
                        )
                      : null,
                    this.state.currentStep === r.BSN
                      ? a.createElement(W, { title: 'BSN Controle' }, a.createElement(ge, e))
                      : null,
                    this.state.currentStep === r.Document
                      ? a.createElement(
                          W,
                          { title: 'Diploma, cijferlijst en legitimatie' },
                          a.createElement(ye, e),
                        )
                      : null,
                    this.state.currentStep === r.DocumentAG
                      ? a.createElement(
                          W,
                          { title: 'Certificaat en legitimatie' },
                          a.createElement(je, e),
                        )
                      : null,
                    this.state.currentStep === r.Approval
                      ? a.createElement(
                          W,
                          { title: 'Opmerkingen en akkoord kosten' },
                          a.createElement(ue, e),
                        )
                      : null,
                    this.state.currentStep === r.Summary
                      ? a.createElement(W, { title: 'Samenvatting' }, a.createElement(we, e))
                      : null,
                    this.state.currentStep === r.Completion
                      ? a.createElement(W, { title: 'Afronding' }, a.createElement(fe, e))
                      : null,
                  );
                },
              },
              {
                key: 'setStep',
                value: function(e) {
                  this.setState({ currentStep: e });
                },
              },
              {
                key: 'onSubmit',
                value: function(e, t, n) {
                  var a = this;
                  if (this.state.currentStep === r.Summary) {
                    this.setState({ hasSubmitError: !1 });
                    var o = {
                      variables: {
                        input: {
                          preEducationId: e.FormOptions.Vooropleiding
                            ? parseInt(''.concat(e.FormOptions.Vooropleiding.VooropleidingID), 10)
                            : null,
                          dateReceived: e.FormOptions.ExamDate
                            ? e.FormOptions.ExamDate.getTime()
                            : null,
                          CertificaatID: e.FormOptions.Certificaat
                            ? parseInt(''.concat(e.FormOptions.Certificaat.CertificaatID), 10)
                            : null,
                          CertificeringID: null,
                          file1: e.FormOptions.File1,
                          file2: e.FormOptions.File2,
                          file3: e.FormOptions.File3,
                          remarks: e.FormOptions.Remarks,
                        },
                      },
                    };
                    e.FormOptions.isLoggedIn
                      ? (o.variables.personDataInput = {
                          PersoonID: parseInt(''.concat(e.Persoon.PersoonID), 10),
                          Email: e.Persoon.Contactgegevens.Email,
                        })
                      : e.FormOptions.hasBsn
                        ? (o.variables.createPersonByBsnInput = {
                            BSN: parseInt(''.concat(e.Persoon.BSN), 10),
                            Geboortedatum: e.Persoon.Geboortedatum,
                            Email: e.Persoon.Contactgegevens.Email,
                          })
                        : (o.variables.createPersonByPersonDataInput = {
                            Voorletters: e.Persoon.Voorletters,
                            Tussenvoegsel: e.Persoon.Tussenvoegsel,
                            Achternaam: e.Persoon.Achternaam,
                            Geslacht: e.Persoon.Geslacht,
                            Geboortedatum: e.Persoon.Geboortedatum,
                            Nationaliteit: e.Persoon.Nationaliteit,
                            Adresregel1: e.Persoon.Contactgegevens.Adresregel1,
                            Adresregel2: e.Persoon.Contactgegevens.Adresregel2,
                            Huisnummer: parseInt(
                              ''.concat(e.Persoon.Contactgegevens.Huisnummer),
                              10,
                            ),
                            HuisnummerToevoeging: e.Persoon.Contactgegevens.HuisnummerToevoeging,
                            Postcode: e.Persoon.Contactgegevens.Postcode,
                            Woonplaats: e.Persoon.Contactgegevens.Woonplaats,
                            Land: e.Persoon.Contactgegevens.Land,
                            Email: e.Persoon.Contactgegevens.Email,
                          }),
                      t(o)
                        .then(function(e) {
                          n.setFieldValue('licenseRequestResult', e.data.requestLicense),
                            n.setSubmitting(!1),
                            a.setStep(r.Completion);
                        })
                        .catch(function(e) {
                          a.setState({ hasSubmitError: !0 }), n.setSubmitting(!1);
                        });
                  }
                },
              },
              {
                key: 'handleSubmit',
                value: function(e) {
                  e.preventDefault();
                },
              },
            ]),
            t
          );
        })(a.Component),
        xe = (function(e) {
          function t(e) {
            return Object(p.a)(this, t), Object(m.a)(this, Object(d.a)(t).call(this, e));
          }
          return (
            Object(h.a)(t, e),
            Object(u.a)(t, [
              {
                key: 'render',
                value: function() {
                  return a.createElement(
                    W,
                    { title: 'Geen geldige licentie' },
                    a.createElement(
                      M,
                      { type: 'warning' },
                      "U heeft geen geldige licentie(s) om 'Adviseren Gewasbescherming' aan te vragen.",
                      a.createElement('br', null),
                      'U kunt zich inschrijven bij een HBO instelling voor opleiding "Adviseren Gewasbescherming"',
                      a.createElement('br', null),
                      a.createElement('br', null),
                      'De volgende scholen bieden deze opleiding aan:',
                      a.createElement('br', null),
                      a.createElement(
                        'table',
                        { className: 'table table-striped' },
                        a.createElement(
                          'tbody',
                          null,
                          a.createElement(
                            'tr',
                            null,
                            a.createElement('td', null, 'Aeres Hogeschool Dronten'),
                            a.createElement('td', null, 'Mw. Bettie Tijsseling'),
                            a.createElement(
                              'td',
                              null,
                              a.createElement(
                                'a',
                                { href: 'www.aereshogeschool.nl' },
                                'www.aereshogeschool.nl',
                              ),
                            ),
                          ),
                          a.createElement(
                            'tr',
                            null,
                            a.createElement('td', null, 'HAS Den Bosch'),
                            a.createElement('td', null, 'Dhr. Toine Hattink'),
                            a.createElement(
                              'td',
                              null,
                              a.createElement(
                                'a',
                                { href: 'www.hashogeschool.nl' },
                                'www.hashogeschool.nl',
                              ),
                            ),
                          ),
                          a.createElement(
                            'tr',
                            null,
                            a.createElement('td', null, 'In Holland Delft'),
                            a.createElement('td', null, 'Mw. Marja den Toom'),
                            a.createElement(
                              'td',
                              null,
                              a.createElement(
                                'a',
                                { href: 'www.inholland.nl' },
                                'www.inholland.nl',
                              ),
                            ),
                          ),
                          a.createElement(
                            'tr',
                            null,
                            a.createElement('td', null, 'Van Hall Larenstein Leeuwarden'),
                            a.createElement('td', null, 'Dhr. Bart Wezeman'),
                            a.createElement(
                              'td',
                              null,
                              a.createElement('a', { href: 'www.hvhl.nl' }, 'www.hvhl.nl'),
                            ),
                          ),
                        ),
                      ),
                      'Loket Adviseren gewasbescherming namens de gezamenlijke HBO\u2019s: Wordt nog bekend gemaakt...',
                    ),
                  );
                },
              },
            ]),
            t
          );
        })(a.Component),
        Ve = (n(418),
        n(419),
        n(420),
        n(421),
        (function(e) {
          function t(e) {
            return Object(p.a)(this, t), Object(m.a)(this, Object(d.a)(t).call(this, e));
          }
          return (
            Object(h.a)(t, e),
            Object(u.a)(t, [
              {
                key: 'render',
                value: function() {
                  return a.createElement(
                    'div',
                    { className: 'App container-fluid' },
                    a.createElement(
                      g.a,
                      null,
                      a.createElement(
                        'div',
                        null,
                        a.createElement(b.a, { path: '/', component: Ie }),
                        a.createElement(b.a, { path: '/no-valid-license', component: xe }),
                      ),
                    ),
                  );
                },
              },
            ]),
            t
          );
        })(a.Component)),
        Ae = (n(423), new l.a()),
        Ge = new i.a({
          link: Object(s.createUploadLink)({
            uri: 'https://api.erkenningen.nl/graphql',
            credentials: 'include',
          }),
          cache: Ae,
        });
      o.render(
        a.createElement(c.a, { client: Ge }, a.createElement(Ve, null)),
        document.getElementById('root'),
      );
    },
  },
  [[216, 1, 2]],
]);
//# sourceMappingURL=main.d5eaa11a.chunk.js.map
