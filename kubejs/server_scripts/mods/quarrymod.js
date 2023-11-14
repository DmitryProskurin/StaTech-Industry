// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    let st = (id) => `statech:quarrymod/${id}`;

    // -- QUARRYMOD REMOVED RECIPES -- //
    const REMOVED = [
        qm('crafting_table/upgrades/fortune_lvl1_upgrade'),
        qm('crafting_table/upgrades/range_extender_lvl1_upgrade'),
        qm('crafting_table/upgrades/silktouch_upgrade')
    ];
    REMOVED.forEach(id => event.remove({ id: id }));

    // -- FORTUNE UPGRADE LVL1 -- //
    event.shaped(qm('fortune_lvl1_upgrade'), [
        'PLP',
        'AEA',
        ' P '
    ],
    {
        P: '#c:peridot_plates',
        L: '#c:lazurite_plates',
        A: mi('analog_circuit'),
        E: tr('extractor')
    })
    .id(st('fortune_lvl1_upgrade'));

    // -- RANGE EXTENDER UPGRADE LVL1 -- //
    event.shaped(qm('range_extender_lvl1_upgrade'), [
        'ATT',
        'TPT',
        'TTA'
    ],
    {
        A: mi('analog_circuit'),
        T: qm('drill_tube'),
        P: '#c:advanced_alloy_plates'
    })
    .id(st('range_extender_lvl1_upgrade'));

    // -- SILKTOUCH UPGRADE -- //
    event.shaped(qm('silktouch_upgrade'), [
        'PCP',
        'CMC',
        'PIP'
    ],
    {
        P: '#c:silicon_plates',
        C: tr('advanced_circuit'),
        M: mi('electric_compressor'),
        I: '#c:stainless_steel_ingots'
    })
    .id(st('silktouch_upgrade'));

    // -- QUARRY -- //
    event.shaped(qm('quarry'), [
        'MDM',
        'CFC',
        'PTP'
    ],
    {
        M: mi('motor'),
        D: mi('bronze_drill_head'),
        C: tr('advanced_circuit'),
        F: tr('advanced_machine_frame'),
        P: '#c:magnalium_plates',
        T: qm('drill_tube')
    })
    .id(st('quarry'));
})